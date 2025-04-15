from rest_framework import viewsets, permissions
from .models import Event
from .serializers import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
  serializer_class = EventSerializer
  permission_classes = [permissions.isAuthenticated]

  def get_queryset(self):
    return Event.objects.filter(user=self.request.user)

  def perform_create(self, serializer):
    serializer.save(user=self.request.user)
    html_content = render_to_string("email_invite.html", {
        "title": event.title,
        "description": event.description,
        "start_time": event.start_time,
        "end_time": event.end_time,
        "location": event.location,
        "user": self.request.user,
        "from_email": event.from_email,
        "email_body": event.email_body,
        "email_subject": event.email_subject,
    })

    # Send to each invitee
    for invitee in event.invitees:
        msg = EmailMultiAlternatives(
            subject=event.email_subject,
            body=event.email_body,
            from_email=event.from_email,
            to=[invitee]
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()
