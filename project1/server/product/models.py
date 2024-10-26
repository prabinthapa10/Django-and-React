from django.db import models

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=100, null=False, blank=False)
    product_price = models.DecimalField(max_digits=7,decimal_places=2, null=False, blank=False)
    product_description = models.TextField()
    product_category = models.CharField(max_length=100, null=True, blank=True)
    product_image = models.ImageField(upload_to='uploads/images', null=False, blank= False)

    def __str__(self) -> str:
        return self.product_name