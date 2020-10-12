from django.conf import settings
from django.urls import include, path

# from rest_framework.routers import DefaultRouter, SimpleRouter

from .views import PostList, PostDetail


app_name = "blog"
urlpatterns = [
    path("", PostList.as_view(), name="list"),
    path("<slug:slug>/", PostDetail.as_view(), name="detail"),
]

# if settings.DEBUG:
#     router = DefaultRouter()
# else:
#     router = SimpleRouter()
# router.register("posts", PostViewSet)

# urlpatterns = router.urls
