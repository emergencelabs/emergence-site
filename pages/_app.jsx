import "../styles/index.css";
import Layout from "../components/layout";

function Blog({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Blog;
