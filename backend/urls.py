from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html"), name="home"),
    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # print("\n\n\n", staticfiles_urlpatterns(), "\n\n\n")
    urlpatterns += staticfiles_urlpatterns()


urlpatterns += [
    # API base url
    path("api/", include("backend.api_router")),
    # DRF auth token
    # path("auth-token/", obtain_auth_token),
]
