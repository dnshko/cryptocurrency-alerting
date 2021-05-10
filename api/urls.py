from django.urls import path
from .views import PriceAPIView

# app_name = 'api'

urlpatterns = [
    path('price/', PriceAPIView.as_view()),
    path('price/<int:id>/', PriceAPIView.as_view()),

]