from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

from .models import Emplacement, Device, Sensor, Feedback
from .serializers import EmplacementSerializer, DeviceSerializer, SensorSerializer, FeedbackSerializer
import django_filters

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
    
class FeedbackViewSet(ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    search_fields = '__all__'

type_choices= (
        ('TEMP' , 'temperature'),
        ('HUMA' , 'air humidity'),
        ('HUMS' , 'soil humidity'),
        ('LVLW' , 'water level'),       
    )

class FeedbackFilter(django_filters.FilterSet):
    type = django_filters.ChoiceFilter (choices=type_choices)
    class Meta:
        model = Feedback
        fields=['type']