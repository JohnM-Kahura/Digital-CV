from rest_framework import generics
from cv.models import CV
from .serializers import CVSerializer


class CVList(generics.ListCreateAPIView):
    queryset=CV.objects.all()
    serializer_class=CVSerializer
class CVDetail(generics.RetrieveAPIView):
    queryset=CV.objects.all()
    serializer_class=CVSerializer    
