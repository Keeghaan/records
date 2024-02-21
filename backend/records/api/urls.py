from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import RecordViewSet
from .. import views

record_router = DefaultRouter()
record_router.register(r'records', RecordViewSet)

urlpatterns = [
    path('', views.getRoutes, name="routes")
]