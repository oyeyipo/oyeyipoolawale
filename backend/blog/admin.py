from django.contrib import admin

from .models import Post


@admin.register(Post)
class PostModelAdmin(admin.ModelAdmin):
    exclude = ("slug",)
    list_display = ("title", "slug", "updated_at", "created_at")
    list_display_link = "updated_at"
    list_filter = ("updated_at", "created_at")
    search_fields = ("title", "updated_at")
