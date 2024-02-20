from rest_framework.routers import DefaultRouter
from app.api.urls import record_router
from django.urls import path, include

router = DefaultRouter()

router.registry.extend(record_router.registry)

url_patterns = [
    path('', include(router.urls))
]