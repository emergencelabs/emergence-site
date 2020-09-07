import Head from "next/head";
import { getAllPosts } from "../lib/api";
import Preamble from "../components/preamble";
import PageSection from "../components/page-section";
import PostPreview from "../components/post-preview";

export default function IndexPage({ allPosts }) {
  return (
    <>
      <Head>
        <title>Myles was here</title>
      </Head>
      <section>
        <Preamble title="Hey, I'm Myles">
          <p className="font-sans">
            I’m a developer, writer, and creator living in Vancouver, BC. You’ve
            found my personal slice of the internet – everything you want to
            know and more is here.
          </p>
        </Preamble>
        <PageSection title="All Posts">
          {allPosts.map((post) => (
            <PostPreview
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </PageSection>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  return {
    props: { allPosts },
  };
}
