from django.contrib import admin
from .models import CustomUser, Category, Formateur, Training, Employee, Enrollment

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Category)
admin.site.register(Formateur)
admin.site.register(Training)
admin.site.register(Employee)
admin.site.register(Enrollment)
