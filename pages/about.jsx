import Preamble from "../components/preamble";
import PageSection from "../components/page-section";

export default function AboutPage() {
  return (
    <section>
      <Preamble title="About">
        <p className="font-sans">
          From the desk. There is literally nothing here because nothing has
          been written.
        </p>
        <p className="font-sans">Would be cool if it had though.</p>
      </Preamble>
      <PageSection title="Something about Me">
        <p>To do...</p>
      </PageSection>
    </section>
  );
}
