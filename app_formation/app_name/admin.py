from django.contrib import admin
from .models import CustomUser, Category, Formateur, Training, Employee, Enrollment
from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = (
        (None, {'fields': ('email', 'password')}),  # Ajoutez les autres champs si nécessaire
        ('Permissions', {'fields': ('is_active', 'is_staff', 'role')}),  # Personnalisez les permissions
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_active', 'is_staff', 'role'),
        }),
    )
    list_display = ['email', 'username', 'is_active', 'is_staff', 'role']  # Affichez les champs dans la liste d'affichage de l'administration
    search_fields = ('email', 'username')  # Ajoutez les champs que vous souhaitez rechercher
    ordering = ('email',)  # Définissez l'ordre de tri des utilisateurs dans l'administration
    filter_horizontal = []  # Supprimez les champs non présents dans votre modèle
    list_filter = ['is_active', 'is_staff', 'role']  # Définissez les champs de filtrage appropriés

# Enregistrez la classe CustomUserAdmin avec le modèle CustomUser
admin.site.register(CustomUser, CustomUserAdmin)


# Enregistrez les autres modèles
admin.site.register(Category)
admin.site.register(Formateur)
admin.site.register(Training)
admin.site.register(Employee)
admin.site.register(Enrollment)
