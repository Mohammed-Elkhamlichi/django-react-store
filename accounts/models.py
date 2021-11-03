from django.db import models

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    price = models.PositiveIntegerField()
    created = models.DateTimeField(auto_now=True)
    update = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

