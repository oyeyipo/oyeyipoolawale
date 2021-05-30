from .base import FunctionalTest

POSTS_LIST = [
    "How to be a programmer",
    "Getting up and running with react",
    "Understanding bash scripts",
]


class ReadersTest(FunctionalTest):
    def test_can_see_list_of_blog_post_and_read_in_detail(self):
        # Bola decide to check the personal website of Oyeyipo Olawale
        self.browser.get(self.live_server_url)

        # On loading the website he notices that there is
        # "Oyeyipo" both the title and header on the homepage.
        self.assertIn("Oyeyipo", self.browser.title)
        header_text = self.browser.find_element_by_tag_name("h1").text
        self.assertIn("Oyeyipo", header_text)

        # He notices that the was a list of blog posts titles on the homepage too
        # under the title "Blog Posts" that Oyeyipo has recently written
        blog_section = self.browser.find_element_by_css_selector("section#blog-posts")
        blog_header = blog_section.find_element_by_tag_name("h2").text

        ## saw the blog posts section header
        self.assertEqual("Blog posts", blog_header)

        ## The list of blog posts
        blog_posts = blog_section.find_elements_by_tag_name("li")
        self.assertTrue(
            set(POSTS_LIST).issubset(blog_posts),
            f"\n\nThe blog_posts is: {blog_posts}\nPOST_LIST is: {POSTS_LIST}",
        )
        # Bola check out one of the post and read it in detail.
        self.fail("Finish me!")
