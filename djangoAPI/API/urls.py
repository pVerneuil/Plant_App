from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmplacementViewSet, DeviceViewSet, SensorViewSet, FeedbackViewSet, ActuatorViewSet, InstructionViewSet

router = DefaultRouter()

router.register(r'emplacement', EmplacementViewSet, basename='emplacement')
router.register(r'device', DeviceViewSet, basename='device')
router.register(r'sensor', SensorViewSet, basename='sensor')
router.register(r'feedback', FeedbackViewSet, basename='feedback')
router.register(r'actuator', ActuatorViewSet, basename='actuator')
router.register(r'instruction', InstructionViewSet, basename='instruction')

urlpatterns = [
    path("", include(router.urls))
]
