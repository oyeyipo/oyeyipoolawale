from django.db import models
from django.utils.text import slugify

from backend.core.models import TimestampedModel


class Post(TimestampedModel):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    content = models.TextField()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        print("In save method")
        self.slug = create_slug(self)
        super().save(*args, **kwargs)


def create_slug(instance, new_slug=None):
    print("In create_slug")
    slug = slugify(instance.title)
    if new_slug is not None:
        slug = new_slug
    queryset = Post.objects.filter(slug=slug).order_by("-id")
    exists = queryset.exists()
    if exists:
        new_slug = f"{slug}-{queryset.first().id}"
        print("In create_slug exists")
        return create_slug(instance, new_slug=new_slug)
    print("In create_slug new")
    return slug
