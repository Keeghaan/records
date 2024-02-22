from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import RecordViewSet
from .. import views

record_router = DefaultRouter()
record_router.register(r'records', RecordViewSet)

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('records/', views.getRecords, name="records"),
    path('records/<pk>/update/', views.updateRecord, name="update"),
    
    path('records/<pk>/', views.getOneRecord, name="record"),
    path('<path:unmatched_path>', views.pageNotFound, name="error"),
]