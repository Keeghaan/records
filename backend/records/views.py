from django.shortcuts import render
from .models import Record
from .api.serializers import RecordSerializer
from rest_framework.response import Response 
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [     
         {
            'Endpoint': '/api/records',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of records'
        },
        {
            'Endpoint': '/api/records',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single record object'
        },
        {
            'Endpoint': '/api/records/create/',
            'method': 'POST',
            'body': {'text': ""},
            'description': 'Creates new record with data sent in post request'
        },
        {
            'Endpoint': '/api/records/id/update/',
            'method': 'PUT',
            'body': {'text': ""},
            'description': 'Creates an existing record with data sent in post request'
        },
        {
            'Endpoint': '/api/records/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting record'
        }
    ]
    return Response(routes)

@api_view(['GET'])
def getRecords(request):
    records = Record.objects.all()
    serializer = RecordSerializer(records, many=True)
    return (Response(serializer.data))

@api_view(['GET'])
def getOneRecord(request, pk):
    record = Record.objects.get(id=pk)
    serializer = RecordSerializer(record, many=False)
    return (Response(serializer.data))

@api_view(['POST'])
def createRecord(request):
    data = request.data
    newRecord = Record.objects.create(text=data['text'])
    serializer = RecordSerializer(newRecord, many=False)
    return (serializer.data)

@api_view(['PUT'])
def updateRecord(request, pk):
    data = request.data
    record = Record.objects.get(id=pk)
    print(data)
    serializer = RecordSerializer(record, data=data)
    if (serializer.is_valid()):
        serializer.save()
    return (Response(serializer.data))

@api_view(['DELETE'])
def deleteRecord(request, pk):
    record = Record.get(id=pk)
    record.delete()
    return (Response("record deleted"))

@api_view(['GET'])
def pageNotFound(request, unmatched_path=None):
    return (Response("This page doesn't exist"))