from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from useless_api.models import UselessFact
from useless_api.serializers import UselessFactSerializer
# Create your views here.

@api_view(['GET', 'POST'])
def useless_fact_list(request, format=None):
    """
    List all useless facts, or create a useless fact.
    """
    if request.method == 'GET':
        useless_facts = UselessFact.objects.all()
        serializer = UselessFactSerializer(useless_facts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UselessFactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def useless_fact_detail(request, pk, format=None):
    """
    Retrieve, update or delete a useless fact.
    """
    try:
        useless_fact = UselessFact.objects.get(pk=pk)
    except UselessFact.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UselessFactSerializer(useless_fact)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UselessFactSerializer(useless_fact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        useless_fact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
