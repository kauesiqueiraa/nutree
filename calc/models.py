from django.db import models

# Create your models here.

class ProductivityData(models.Model):
    volume_ha = models.FloatField()
    PPAHa = models.FloatField(null=True, blank=True)
    PCHa = models.FloatField(null=True, blank=True)
    PLHa = models.FloatField(null=True, blank=True)