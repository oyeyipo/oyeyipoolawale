from django.shortcuts import render
from rest_framework import permissions, viewsets

from .models import Post
from .serializers import PostListSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Posts to be viewed or edited.
    """

    queryset = Post.objects.all()
    serializer_class = PostListSerializer
