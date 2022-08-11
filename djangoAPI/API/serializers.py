from rest_framework import serializers
from .models import Emplacement, Device, Sensor, Feedback

class EmplacementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emplacement
        fields = "__all__"

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device 
        fields = "__all__"

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = "__all__"

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = "__all__"