from django.conf import settings
from django.urls import include, path
from rest_framework.routers import DefaultRouter, SimpleRouter

from .views import PostViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()
router.register("posts", PostViewSet)

app_name = "blog"
urlpatterns = router.urls

# urlpatterns = [
#     path("", include(router.urls)),
# ]
