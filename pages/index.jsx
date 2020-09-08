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
        <PageSection title="Projects">
          <a href="https://emergencelabs.io">
            <div className="my-6 flex justify-around items-center border border-gray-300 bg-white rounded-lg p-4 hover:shadow-md duration-500 ease-in-out transition-shadow">
              <img
                src="/assets/rocket.png"
                alt="Emergence Labs Logo"
                className="w-16 mx-4"
              />
              <div className="flex-grow">
                <h6 className="font-semibold">Emergence Labs</h6>
                <p className="my-2 text-sm">
                  Emergence Labs offers Salesforce Consulting and Development
                  for emerging businesses. Our success is derived from the
                  success of our clients.
                </p>
              </div>
            </div>
          </a>
          <a href="https://getcustomerinterviews.com">
            <div className="my-6 flex justify-around items-center border border-gray-300 bg-white rounded-lg p-4 hover:shadow-md duration-500 ease-in-out transition-shadow">
              <img
                src="/assets/customer-voice.svg"
                alt="Customer Voice Logo"
                className="w-16 mx-4"
              />
              <div className="flex-grow">
                <h6 className="font-semibold">Customer Interviews</h6>
                <p className="my-2 text-sm">
                  Easily run customer interviews with a unified solution for
                  running sessions, analyzing responses, and presenting your
                  findings.
                </p>
              </div>
            </div>
          </a>
        </PageSection>
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
