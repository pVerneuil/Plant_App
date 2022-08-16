from django.contrib import admin
from .models import Emplacement, Device, Sensor, Feedback

@admin.register(Emplacement)
class EmplacementAdmin(admin.ModelAdmin):
    list_display = ('name','type')
@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = ('name', 'mac_adress', 'emplacement')
@admin.register(Sensor)
class SensorAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'plug_in_device', 'emplacement')
@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('comming_from', 'value', 'type', 'time')
