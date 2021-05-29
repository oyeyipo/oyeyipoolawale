from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import os


class FunctionalTest(StaticLiveServerTestCase):
    def setUp(self):
        super().setUp()
        self.browser = self.start_chrome()
        self.live_server_url = "http://localhost:3000"

    @staticmethod
    def start_chrome():
        options = Options()
        options.headless = True
        options.add_experimental_option("excludeSwitches", ["enable-logging"])
        return webdriver.Chrome(options=options)

    def tearDown(self):
        self.browser.quit()
        super().tearDown()

    def test_can_see_list_of_blog_post_and_read_in_detail(self):
        self.browser.get(self.live_server_url)

        self.assertIn("Oyeyipo", self.browser.title)
        header_text = self.browser.find_element_by_tag_name("h1").text
        self.assertIn("Oyeyipo", header_text)
