from enum import unique
from django.db import models
from django.contrib.auth.models import AbstractUser


# для связи с другими моделями:
# from django.conf import settings
# field = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class User(AbstractUser):
    username = models.CharField(max_length=256, unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField(max_length=256, unique=True)
