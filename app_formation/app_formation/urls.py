from django.contrib import admin
from django.urls import include, path
from app_name.views import (
    CustomTokenObtainPairView,
    EmployeeRetrieveUpdateDestroyAPIView,
    GetUserRole,
    TrainingListCreateAPIView,
    TrainingRetrieveUpdateDestroyAPIView,
    CategoryListCreateAPIView,
    CategoryRetrieveUpdateDestroyAPIView,
    SignUpView,
    EmployeeListCreateAPIView,
    FormateurListCreateAPIView,
    FormateurRetrieveUpdateDestroyAPIView,
    redirect_to_admin,
    EnrollmentCreateAPIView,
)
from app_name.views import EnrollmentDetailAPIView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('api/category/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('api/category/<int:pk>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-detail'),
    path('api/training/', TrainingListCreateAPIView.as_view(), name='training-list-create'),
    path('api/training/<int:pk>/', TrainingRetrieveUpdateDestroyAPIView.as_view(), name='training-detail'),
    path('api/signup/', SignUpView.as_view(), name='signup'),
    path('api/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/employee/', EmployeeListCreateAPIView.as_view(), name='employee-list-create'),
    path('api/employee/<int:pk>/', EmployeeRetrieveUpdateDestroyAPIView.as_view(), name='employee-detail'),
    path('api/formateurs/', FormateurListCreateAPIView.as_view(), name='formateur-list-create'),
    path('api/formateurs/<int:pk>/', FormateurRetrieveUpdateDestroyAPIView.as_view(), name='formateur-detail'),
   path('api/enrollments/', EnrollmentCreateAPIView.as_view(), name='enrollment-create'),
    path('api/enrollments/<int:pk>/', EnrollmentDetailAPIView.as_view(), name='enrollment-detail'),
    path('api/get-role/', GetUserRole.as_view(), name='get-role'),
    path('admin/', admin.site.urls),

    
    
]
