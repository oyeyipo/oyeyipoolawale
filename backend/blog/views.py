from django.shortcuts import render
from rest_framework import permissions, viewsets

from .models import Post
from .serializers import PostListSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Posts to be viewed or edited.
    """

    # TODO: convert to regular APIView class for permission
    # sake

    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    permission_class = [permissions.IsAuthenticatedOrReadOnly]
