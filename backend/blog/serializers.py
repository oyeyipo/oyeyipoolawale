from rest_framework import serializers
from .models import Post


class PostListSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name="api:blog:detail", read_only=True, lookup_field="slug"
    )

    class Meta:
        model = Post
        fields = ["url", "slug", "title", "updated_at"]


class PostDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ["title", "slug","content", "updated_at", "created_at"]
