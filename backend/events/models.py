from django.db import models
from django.conf import settings

class Event(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  title = models.CharField(max_length=225)
  description = models.TextField(blank=True)
  start_time = models.DateTimeField()
  end_time = models.DateTimeField()
  location = models.CharField(max_length=225)
  invitees = models.JSONField()
  email_subject = models.CharField(max_length=225)
  email_body = models.TextField(max_length=500)
  from_email = models.EmailField()
  created_at = models.DateTimeField(auto_now_add=True)
  
