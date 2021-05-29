from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import os
import environ

env = environ.Env()


class FunctionalTest(StaticLiveServerTestCase):
    def setUp(self):
        super().setUp()
        self.browser = self.start_chrome()
        self.live_server_url = env("FRONTEND_URL", default="http://localhost:3000")

    @staticmethod
    def start_chrome():
        options = Options()
        options.headless = True
        options.add_experimental_option("excludeSwitches", ["enable-logging"])
        return webdriver.Chrome(options=options)

    def tearDown(self):
        self.browser.quit()
        super().tearDown()
