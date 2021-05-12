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


class UserManager(BaseUserManager):
 
    def get_by_natural_key(self, email,):
        return self.get(email=email)

class CustomAccountClient(BaseUserManager):

    def create_clientadmin(self, email, client, license_key, password, **other_fields):

        other_fields.setdefault('is_staff', False)
        other_fields.setdefault('is_superuser', False)
        other_fields.setdefault('is_active', False)
        other_fields.setdefault('is_client_admin',True)
        other_fields.setdefault('is_student',False)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.client(email, client, license_key, password, **other_fields)

    def clientadmin(self, email, client, license_key, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        clientadmin = self.model(email=email, client=client,
                          license_key=license_key, **other_fields)
        clientadmin.set_password(password)
        clientadmin.save()
        return client

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(db_index=True, unique=True)
    password =  models.CharField(max_length=265, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
 
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name',]

    objects = UserManager()
    class Meta:
        db_table="user"

    def __str__(self):
        return self.email

class ClientAdmin(User, PermissionsMixin ):

    client_admin_id = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=265, null=True, blank=True)
    LastName = models.CharField(max_length=265, null=True, blank=True)
    license_key = models.CharField(max_length=265, null=True, blank=True)
    confirm_password = models.CharField(max_length=265, null=True, blank=True)
    is_client_admin = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)

    objects = CustomAccountClient()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['client','license_key']
    class Meta:
        db_table="pt_clientadmin"

    def __str__(self):
        return self.FirstName
class Price(models.Model):

    choose_coin =  models.CharField(max_length=265, null=True, blank=True)
    alert_me_on =  models.CharField(max_length=265, null=True, blank=True)
    when_price_of_coin =  models.CharField(max_length=265, null=True, blank=True)
    goes =  models.CharField(max_length=265, null=True, blank=True)
    by = models.IntegerField(null=True, blank=True)
    colldown = models.DateTimeField(default=timezone.now, null=True, blank=True)
    add_a_note = models.CharField(max_length=265, null=True, blank=True)
    by_currency = models.CharField(max_length=265, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table="Price"

    def __str__(self):
        return self.choose_coin

