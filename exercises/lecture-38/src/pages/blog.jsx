import BlogContext from '../components/BlogContext';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import BlogInfo from '../components/BlogInfo';

function Blog() {
  const blogName = "NataMimoza's blog";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <BlogInfo />
        <Posts />
      </Layout>
    </BlogContext.Provider>
  );
}

export default Blog;