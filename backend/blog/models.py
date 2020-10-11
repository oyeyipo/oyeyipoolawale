from django.db import models
from django.utils.text import slugify

import random, string

from backend.core.models import TimestampedModel


class Post(TimestampedModel):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    content = models.TextField()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = create_slug(self)
        super().save(*args, **kwargs)


def create_slug(instance, new_slug=None):
    slug = slugify(instance.title)
    if new_slug is not None:
        slug = new_slug
    queryset = Post.objects.filter(slug=slug).order_by("-id")
    exists = queryset.exists()
    if exists:
        new_slug = f"{slug}-{random_word()}"
        return create_slug(instance, new_slug=new_slug)
    return slug


def random_word(length=5):
    letters = string.ascii_letters
    return "".join(random.choice(letters) for _ in range(length))
