from django.db import models

# Create your models here.
SIZE = [
    ("m", "M"),
    ('l', "L"),
   ( 'XL', "XL"),
    ('X', "X"),
]

class Product(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    price = models.PositiveIntegerField()
    images = models.ImageField(blank=True, null=True, upload_to='products/')
    size = models.CharField(choices=SIZE, max_length=200, default=('M', 'M'))
    created = models.DateTimeField(auto_now=True)
    update = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

