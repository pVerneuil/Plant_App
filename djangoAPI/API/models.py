from email.policy import default
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
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

type_choices= (
        ('TEMP' , 'temperature'),
        ('HUMA' , 'air humidity'),
        ('HUMS' , 'soil humidity'),
        ('LVLW' , 'water level'),       
    )
class Sensor(models.Model):
    name = models.CharField(max_length=20, null=True)
    type = models.CharField(max_length=20, choices= type_choices)
    plug_in_device = models.ForeignKey(Device,null= True, on_delete=models.SET_NULL)
    emplacement = models.ForeignKey(Emplacement, null= True, on_delete=models.SET_NULL)


class Feedback(models.Model):
    value = models.FloatField()
    comming_from = models.ForeignKey(Sensor,null= True, on_delete=models.SET_NULL)
    type = models.CharField(max_length=128, choices=type_choices)
    time = models.DateTimeField(auto_now_add=True)

class Actuator(models.Model):
    actuator_type_choices={
        ('ATOM','water atomiser'),
        ('PERP','peristaltic pump'),
    }
    name = models.CharField(max_length=20, null=True)
    plug_in_device = models.ForeignKey(Device,null= True, on_delete=models.SET_NULL)
    type = models.CharField(max_length=128, choices=actuator_type_choices)
    gpio = models.IntegerField(default=0, validators= [MinValueValidator(0),MaxValueValidator(30)])
    emplacement = models.ForeignKey(Emplacement, null=True, on_delete=models.SET_NULL)
    

    
class Instruction(models.Model):
    actuator = models.ForeignKey(Actuator,null=True, on_delete=models.SET_NULL)
    duration = models.IntegerField(default=0, validators= [MinValueValidator(0),MaxValueValidator(1200)])
    time_created = models.DateTimeField(auto_now_add=True)
    time_exectuted = models.DateTimeField(null= True, blank=True)
    is_sent = models.BooleanField(default=False, blank=True)
    is_executed = models.BooleanField(default=False, blank=True)
    