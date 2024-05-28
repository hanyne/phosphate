from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from .models import Category, Employee, Training, Formateur, Enrollment
from .serializers import (
    CustomTokenObtainPairSerializer, TrainingSerializer, CategorySerializer, EmployeeSerializer, FormateurSerializer, 
    CustomUserSerializer, EnrollmentSerializer
)
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from django.shortcuts import redirect
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Enrollment
from .serializers import EnrollmentSerializer

def redirect_to_admin(request):
    return redirect('/admin/')

class EnrollmentCreateAPIView(CreateAPIView):
    serializer_class = EnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Récupérer l'utilisateur connecté à partir de la demande HTTP
        user = self.request.user
        # Associer l'utilisateur connecté à l'enregistrement d'inscription
        serializer.save(user=user)
class EnrollmentDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

class SignUpView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class CategoryListCreateAPIView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TrainingListCreateAPIView(ListCreateAPIView):
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer

class TrainingRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer

    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmployeeListCreateAPIView(ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class FormateurListCreateAPIView(ListCreateAPIView):
    queryset = Formateur.objects.all()
    serializer_class = FormateurSerializer

class FormateurRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Formateur.objects.all()
    serializer_class = FormateurSerializer
