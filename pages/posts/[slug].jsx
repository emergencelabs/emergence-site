import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";

export default function Post({ source, post }) {
  const content = hydrate(source);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title} | Myles was here</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <h1>{post.title}</h1>
            <div>{content}</div>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const source = await renderToString(post.content);

  return {
    props: {
      post,
      source,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
