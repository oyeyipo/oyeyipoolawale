from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html"), name="home"),
    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
]


urlpatterns += [
    # API base url
    path("api/", include("backend.api_router")),
    # DRF auth token
    # path("auth-token/", obtain_auth_token),
]
