from django.contrib.auth.models import User
from rest_framework import serializers

class RegisterSerializer(serializers.ModelSerializer):
  passowrd = serializers.CharField(write_only=True)
  
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')

  def create(self, validated_data):
    user = User.objects.create_user(
      username=validated_data['email'],
      email=validated_data['email'],
      password=validated_data['password']
    )
    return user
