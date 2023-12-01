from django.urls import path, include
from history import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('sickness', views.SicknessViewSet)
router.register('appointment', views.AppointmentViewSet)

app_name = 'appointment'

urlpatterns = [
    path('', include(router.urls)),
]

