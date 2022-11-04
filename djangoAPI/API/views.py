from time import time
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, generics
from django_filters import rest_framework as filterSet
from django.utils import timezone
from datetime import timedelta
from .models import Emplacement, Device, Sensor, Feedback, Actuator, Instruction
from .serializers import EmplacementSerializer, DeviceSerializer, SensorSerializer, FeedbackSerializer, ActuatorSerializer,InstructionSerializer


class EmplacementViewSet(ModelViewSet):
    queryset = Emplacement.objects.all()
    serializer_class = EmplacementSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = '__all__'
    search_fields = '__all__'

class DeviceViewSet(ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = '__all__'
    search_fields = '__all__'

class SensorViewSet(ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = '__all__'
    search_fields = '__all__'
    

type_choices= (
        ('TEMP' , 'temperature'),
        ('HUMA' , 'air humidity'),
        ('HUMS' , 'soil humidity'),
        ('LVLW' , 'water level'),       
    )

class FeedbackFilter(filterSet.FilterSet):
    type = filterSet.ChoiceFilter (choices = type_choices)
    id = filterSet.NumberFilter(field_name = 'id')
    hours = filterSet.NumberFilter(
        field_name='time', method='get_past_n_hours', label="Past n hours")

    def get_past_n_hours(self, queryset, field_name, value):
        time_threshold = timezone.now() - timedelta(hours=int(value))
        return queryset.filter(time__gte=time_threshold)
    class Meta:
        model = Feedback
        fields=['comming_from']
class FeedbackViewSet(ModelViewSet):
    queryset = Feedback.objects.order_by('-time','type')
    serializer_class = FeedbackSerializer
    filter_backends = (filterSet.DjangoFilterBackend,)
    filterset_class = FeedbackFilter

class ActuatorViewSet(ModelViewSet):
    queryset = Actuator.objects.all()
    serializer_class = ActuatorSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = '__all__'
    search_fields = '__all__'
class InstructionViewSet(ModelViewSet):
    queryset = Instruction.objects.all()
    serializer_class = InstructionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = '__all__'
    search_fields = '__all__'

