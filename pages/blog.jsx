import Preamble from "../components/preamble";
import PageSection from "../components/page-section";
import PostPreview from "../components/post-preview";

export default function BlogPage() {
  return (
    <section>
      <Preamble title="Blog">
        <p className="font-sans">
          From the desk. There is literally nothing here because nothing has
          been written.
        </p>
        <p className="font-sans">Would be cool if it had though.</p>
      </Preamble>
      <PageSection title="All Posts">
        <PostPreview title="Some Post" excerpt="fuck" />
      </PageSection>
    </section>
  );
}
