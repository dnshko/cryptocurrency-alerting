from .models import Price
from .serializers import PriceSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404,JsonResponse
from rest_framework import mixins
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.db import connection
from rest_framework.decorators import api_view
# Create your views here.


class PriceAPIView(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = PriceSerializer
    queryset = Price.objects.all()

    lookup_field ='id'

    def get(self, request , id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)

