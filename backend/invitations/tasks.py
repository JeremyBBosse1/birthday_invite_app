from celery import shared_task
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from events.models import Event  # corrected path

@shared_task
def send_event_email(event_id):
    try:
        event = Event.objects.get(id=event_id)
    except Event.DoesNotExist:
        return

    subject = event.email_subject
    from_email = event.from_email

    for recipient in event.invitees:
        html_content = render_to_string("email/event_invitation.html", {"event": event})
        email = EmailMultiAlternatives(subject, event.email_body, from_email, [recipient])
        email.attach_alternative(html_content, "text/html")
        email.send()
