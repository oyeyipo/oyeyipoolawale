from .base import FunctionalTest


class ReadersTest(FunctionalTest):
    def test_can_see_list_of_blog_post_and_read_in_detail(self):
        self.browser.get(self.live_server_url)

        self.assertIn("Oyeyipo", self.browser.title)
        header_text = self.browser.find_element_by_tag_name("h1").text
        self.assertIn("Oyeyipo", header_text)
