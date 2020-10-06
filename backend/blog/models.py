from django.db import models

from backend.core.models import TimestampedModel

class Post(TimestampedModel):
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.title
