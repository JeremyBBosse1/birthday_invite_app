from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from events.views import EventViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/events/', include(router.urls)),  # This is specifically for events API
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('app.urls')),  # Make sure this is just for app-related APIs like register
]

