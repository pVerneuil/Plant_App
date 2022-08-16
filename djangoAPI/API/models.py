from django.db import models

class Emplacement(models.Model):
    name = models.CharField(max_length=200)
    emplacement_choices = {
        ('plant','plant'),
        ('room','room'),
        ('greenhouse','greenhouse'),
    }
    type = models.CharField(max_length=100, choices= emplacement_choices)

class Device(models.Model):
    name = models.CharField(max_length=200)
    mac_adress = models.CharField(max_length=200, blank=True, null=True)
    emplacement = models.ForeignKey(Emplacement, null=True, on_delete=models.SET_NULL)

class Sensor(models.Model):
    sensor_type = {
        ('temp','temp'),
        ('soilmoist','soilmoist'),
        ('airmoist','airmoist'),
        ('lvl','lvl'),
    }
    name = models.CharField(max_length=20, null=True)
    type = models.CharField(max_length=20, choices= sensor_type)
    plug_in_device = models.ForeignKey(Device,null= True, on_delete=models.SET_NULL)
    emplacement = models.ForeignKey(Emplacement, null= True, on_delete=models.SET_NULL)

class Feedback(models.Model):
    value = models.FloatField()
    comming_from = models.ForeignKey(Sensor,null= True, on_delete=models.SET_NULL)
    type_choices= (
        ('TEMP' , 'temperature'),
        ('HUMA' , ' air humidity'),
        ('HUMS' , 'soil humidity'),
        ('LVLW' , 'water level'),
        
    )
    type = models.CharField(max_length=128, choices=type_choices)
    time = models.DateTimeField(auto_now_add=True)