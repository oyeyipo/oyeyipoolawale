from .base import *
from .base import env

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env(
    "DJANGO_SECRET_KEY",
    default="jNbF6mlEGVOwJLrrJyqH2z8mk2ToqY1sl6rNwEjMJGlRA5Ual8twXFdCqbSu8tJn",
)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["localhost", "0.0.0.0", "127.0.0.1"]


# Application definition
# ======================
INSTALLED_APPS = [] + INSTALLED_APPS  # "whitenoise.runserver_nostatic"
