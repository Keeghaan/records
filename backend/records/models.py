from django.db import models

# Create your models here.
class   Record(models.Model):
    text = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (self.text[0:50])
