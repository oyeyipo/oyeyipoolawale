from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="api:blog:post-detail")

    class Meta:
        model = Post
        fields = ["url", "title", "updated_at"]
