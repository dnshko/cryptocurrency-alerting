from .models import *
from .serializers import *
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

class CustomClientCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = CustomClientSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class ClientAdminAPIVIEW(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = ClientAdminSerializers
    queryset = ClientAdmin.objects.all()

    lookup_field ='client_admin_id'

    def get(self, request , client_admin_id = None):
        if client_admin_id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, client_admin_id=None):
        return self.update(request, client_admin_id)
    
    def patch(self, request, client_admin_id=None):
        return self.partial_update(request, client_admin_id)
    
    def delete(self, request, client_admin_id):
        return self.destroy(request, client_admin_id)


class ClientAdminPasswordAPIVIEW(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = ClientAdminPasswordChangeSerializers
    queryset = ClientAdmin.objects.all()

    lookup_field ='client_admin_id'

    def get(self, request , client_admin_id = None):
        if client_admin_id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, client_admin_id=None):
        return self.update(request, client_admin_id)
    
    def patch(self, request, client_admin_id=None):
        return self.partial_update(request, client_admin_id)
    
    def delete(self, request, client_admin_id):
        return self.destroy(request, client_admin_id)

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

