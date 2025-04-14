from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from events.views import EventViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatters = [
  path('admin/', admin.site.urls),
  path('api/', include(router.urls)),
  path('api-auth/', include('rest_framework.urls')),
]
