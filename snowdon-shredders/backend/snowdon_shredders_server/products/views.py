from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def snowboard_view(request):
  snowboards = [{"name": "Snowboard 1", "description": "Description 1"}, {"name": "Snowboard 2", "description": "Description 2"}]
  return JsonResponse({"snowboards": snowboards})