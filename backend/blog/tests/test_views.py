from django.test import TestCase


class Smoke(TestCase):
    def test_smoke(self):
        self.assertEqual(2, 2)
