# products/urls.py
from django.urls import path
from . import views

urlpatterns = [
  path('snowboard/', views.snowboard_view, name ='snowboard'),
]