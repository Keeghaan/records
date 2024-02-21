from django.shortcuts import render
from .models import Record
from .api.serializers import RecordSerializer
from rest_framework.response import Response 
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET'])
def getRoutes(request):

    routes = [ ...        
    ]
    return Response(routes)

@api_view(['GET'])
def getRecords(request):
    records = Record.objects.all()
    serializer = RecordSerializer(records, many=True)
    return (Response(serializer.data))

@api_view(['GET'])
def getOneRecord(request, pk):
    records = Record.objects.get(id=pk)
    serializer = RecordSerializer(records, many=False)
    return (Response(serializer.data))