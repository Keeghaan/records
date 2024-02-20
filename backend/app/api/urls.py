from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import RecordViewSet

post_router = DefaultRouter
post_router.register(r'records', RecordViewSet)