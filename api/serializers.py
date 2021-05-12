from rest_framework import serializers
from .models import *

class CustomClientSerializer(serializers.ModelSerializer):
    
    client = serializers.CharField(max_length=64,required=True)
    FirstName = serializers.CharField(max_length=64,  )
    LastName = serializers.CharField(max_length=64, )
    email = serializers.EmailField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    license_key = serializers.CharField(max_length=256, required=True )
    confirm_password = serializers.CharField(max_length=32, )
    logo = serializers.ImageField()


    class Meta:
        model = ClientAdmin
        fields = ('email', 'license_key', 'password','FirstName','LastName','confirm_password','logo','client'
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        client = validated_data.get('client', ['client'])
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        if client is not None:
            instance.save()
        instance.save()
        return instance

class ClientAdminSerializers(serializers.ModelSerializer):
    class Meta:
        model = ClientAdmin
        fields = ('email', 'license_key', 'password','FirstName','LastName','confirm_password','client','client_admin_id',
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class ClientAdminPasswordChangeSerializers(serializers.ModelSerializer):
    class Meta:
        model = ClientAdmin
        fields = ('email', 'license_key', 'password','FirstName','LastName','confirm_password','client','client_admin_id',
        )
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password'])
        instance.save()
        return instance


class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = '__all__'