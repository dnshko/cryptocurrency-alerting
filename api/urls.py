from django.urls import path
from .views import *

# app_name = 'api'

urlpatterns = [
    path('price/', PriceAPIView.as_view()),
    path('price/<int:id>/', PriceAPIView.as_view()),

    path('clientadmin/', ClientAdminAPIVIEW.as_view()),
    path('clientadmin/<int:client_admin_id>/', ClientAdminAPIVIEW.as_view()),

    path('clientadmincreate/', CustomClientCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),

]