import logging
from celery import shared_task
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.core.exceptions import ObjectDoesNotExist
from .models import Event

logger = logging.getLogger(__name__)

@shared_task(bind=True, max_retries=3)
def send_event_email(self, event_id):
    try:
        event = Event.objects.get(id=event_id)
    except ObjectDoesNotExist:
        logger.error(f"[Email Task] Event with id {event_id} not found.")
        return

    subject = event.email_subject
    from_email = event.from_email

    for recipient in event.invitees:
        try:
            html_content = render_to_string("email/event_invitation.html", {"event": event})
            email = EmailMultiAlternatives(subject, event.email_body, from_email, [recipient])
            email.attach_alternative(html_content, "text/html")
            email.send()
            logger.info(f"[Email Task] Invitation sent to {recipient} for event {event_id}.")
        except Exception as e:
            logger.error(f"[Email Task] Failed to send email to {recipient} for event {event_id}: {str(e)}")

            # Retry sending this email (for temporary issues)
            try:
                self.retry(exc=e, countdown=60)  # Retry after 60 seconds
            except self.MaxRetriesExceededError:
                logger.error(f"[Email Task] Max retries exceeded for email to {recipient} for event {event_id}.")
