from django.db import models

# Create your models here.

class UselessFact(models.Model):
    fact = models.CharField(max_length=200)
    submit_ts = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['submit_ts']


# Create your models here.
