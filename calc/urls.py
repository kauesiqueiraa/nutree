from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('home/', views.home, name="home"),
    path('download_excel/', views.download_excel, name='download_excel'),
    path('logout/', views.logooff, name="logout"),
]
