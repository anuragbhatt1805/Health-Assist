from django.urls import path, include
from core import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('user', views.ManageUserView)
router.register('insurance', views.ManageInsuranceView)

app_name = 'core'

urlpatterns = [
    path('signup/', views.CreateUserView.as_view(), name='create'),
    path('login/', views.CreateTokenView.as_view(), name='token'),
    path('manage/', include(router.urls)),
]