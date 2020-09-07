export default function PageSection({ title, children }) {
  return (
    <section className="my-16">
      <h3 className="text-3xl font-sans font-semibold">{title}</h3>
      {children}
    </section>
  );
}
