from django.shortcuts import render
from rest_framework import permissions, viewsets, generics

from .models import Post
from .serializers import PostListSerializer, PostDetailSerializer


class PostList(generics.ListAPIView):
    """
    API endpoint that allows Posts to be viewed or edited.
    """

    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    permission_class = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = "slug"


class PostDetail(generics.ListAPIView):
    """
    API endpoint that allows Posts to be viewed or edited.
    """

    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    permission_class = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = "slug"