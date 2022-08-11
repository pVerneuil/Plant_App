from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmplacementViewSet, DeviceViewSet, SensorViewSet, FeedbackViewSet

router = DefaultRouter()

router.register(r'emplacement', EmplacementViewSet, basename='emplacement')
router.register(r'device', DeviceViewSet, basename='device')
router.register(r'sensor', SensorViewSet, basename='sensor')
router.register(r'feedback', FeedbackViewSet, basename='feedback')

urlpatterns = [
    path("", include(router.urls))
]
