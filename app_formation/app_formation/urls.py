"""
URL configuration for app_formation project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app_name.views import TrainingListCreateAPIView, TrainingRetrieveUpdateDestroyAPIView
from app_name.views import CategoryListCreateAPIView, CategoryRetrieveUpdateDestroyAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from app_name.views import SignUpView
from app_name.views import EmployeeListCreateAPIView

urlpatterns = [
    path('category/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('category/<int:pk>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-detail'),
     path('training/', TrainingListCreateAPIView.as_view(), name='training-list-create'),
    path('training/<int:pk>/', TrainingRetrieveUpdateDestroyAPIView.as_view(), name='training-detail'),
     path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/signup/', SignUpView.as_view(), name='signup'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('employee/', EmployeeListCreateAPIView.as_view(), name='employee-list-create'),
]



