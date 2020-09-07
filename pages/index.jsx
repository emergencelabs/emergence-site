import Preamble from "../components/preamble";
import { Head } from "next/document";
import PageSection from "../components/page-section";
import PostPreview from "../components/post-preview";

export default function IndexPage() {
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
          <PostPreview title="Some Post" excerpt="fuck" />
        </PageSection>
      </section>
    </>
  );
}
