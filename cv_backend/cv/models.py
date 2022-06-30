from django.db import models

class CV(models.Model):
    full_name=models.CharField(max_length=200)
    email=models.CharField(max_length=200)
    phone=models.CharField(max_length=15)
    intro=models.TextField(max_length=2000)
    education=models.TextField(max_length=2000)
    experience=models.TextField(max_length=2000)
    skills=models.TextField(max_length=2000)

    def __str__(self):
        return self.full_name
   
    

