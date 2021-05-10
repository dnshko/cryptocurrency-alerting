from django import db 
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager,User
from django import forms
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail
# Create your models here.

class Price(models.Model):

    Choose_Coin =  models.CharField(max_length=265, null=True, blank=True)
    Alert_me_on =  models.CharField(max_length=265, null=True, blank=True)
    When_price_of_coin =  models.CharField(max_length=265, null=True, blank=True)
    Goes =  models.CharField(max_length=265, null=True, blank=True)
    by = models.IntegerField(null=True, blank=True)
    COLLDOWN = models.DateTimeField(default=timezone.now, null=True, blank=True)
    Add_a_note = models.CharField(max_length=265, null=True, blank=True)
    by_currency = models.CharField(max_length=265, null=True, blank=True)

    class Meta:
        db_table="Price"

    def __str__(self):
        return self.Choose_Coin

