from django.db import models

# Create your models here.
class producto(models.Model):
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=75)
    categoria = models.CharField(max_length=75)
    personaje = models.CharField(max_length=75)
    img = models.ImageField(upload_to='ImagenesMuestra/%Y/%m/%d', blank=True)
    stock = models.BooleanField(default=True)
    cantidad = models.IntegerField(default=1)
