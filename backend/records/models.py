from django.db import models

# Create your models here.
class   Record(models.Model):
    text = models.TextField()

    def __str__(self):
        return str(self.text)
