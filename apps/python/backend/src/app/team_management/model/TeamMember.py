from django.db import models
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
class TeamMemberValidation:
    @staticmethod
    def validate_phone(value):
        if TeamMember.objects.filter(phone=value).exists():
            raise ValidationError("This phone number is already in use.")
        return value

class TeamMember(models.Model):
    ROLE_CHOICES = [
        ('regular', 'Regular'),
        ('admin', 'Admin'),
    ]

    first_name  = models.CharField(max_length=100)
    last_name   = models.CharField(max_length=100)
    phone       = models.CharField(max_length=15, validators=[TeamMemberValidation.validate_phone])
    email       = models.EmailField(unique=True)
    role        = models.CharField(max_length=10, choices=ROLE_CHOICES, default='regular')

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.role})"

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'
