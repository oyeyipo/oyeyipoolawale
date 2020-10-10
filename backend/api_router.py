from django.urls import path, include


app_name = "api"
urlpatterns = [
    path("", include("backend.blog.urls")),  # , namespace="blog" no need if app_name
]
