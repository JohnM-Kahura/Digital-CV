from rest_framework import serializers
from cv.models import CV

class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model=CV
        fields=('id','full_name','email','phone','intro','education','experience','skills')