from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('expenses.urls')),
    path('authentication/', include('authentication.urls')),
    path('admin/', admin.site.urls),
]
