from django.contrib import admin
from .models import Emplacement, Device, Sensor, Feedback, Actuator, Instruction

@admin.register(Emplacement)
class EmplacementAdmin(admin.ModelAdmin):
    list_display = ('id','name','type')
@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'mac_adress', 'emplacement')
@admin.register(Sensor)
class SensorAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'type', 'plug_in_device', 'emplacement')
@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('comming_from', 'value', 'type', 'time')
@admin.register(Actuator)
class ActuatorAdmin(admin.ModelAdmin):
    list_display = ('name', 'plug_in_device', 'type', 'emplacement','gpio')
@admin.register(Instruction)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('id','actuator', 'duration', 'time_created', 'time_exectuted', 'is_sent', 'is_executed')
