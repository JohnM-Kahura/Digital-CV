from django.urls import path
from .views import CVDetail,CVList
app_name='api'
urlpatterns = [
   path('<int:pk>/',CVDetail.as_view(),name='detailcreate'),
    path('',CVList.as_view(),name='listcreate'),
]
