import random
import string

from django.db import models
from django.urls import reverse
from django.utils.text import slugify

from backend.core.models import TimestampedModel


def upload_location(instance, filename):
    return f"post/{instance.slug}/{filename}"


class Post(TimestampedModel):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    cover_img = models.ImageField(
        blank=True,
        height_field="height_img",
        width_field="width_img",
        upload_to=upload_location,
    )
    height_img = models.IntegerField(default=0)
    width_img = models.IntegerField(default=0)
    content = models.TextField()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = create_slug(self)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("api:blog:detail", kwargs={"slug": self.slug})


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
