export default function Testimonial() {
  return (
    <section className="text-white bg-emrg-black text-center py-20 relative overflow-hidden">
      <img
        src="/assets/circles.svg"
        alt="Decorative purple cirlces"
        className="absolute"
        style={{ right: "2rem", top: "-1rem", maxWidth: "3rem" }}
      />
      <img
        src="/assets/triangles.svg"
        alt="Decorative triangles"
        className="absolute opacity-25 left-0 bottom-0"
        style={{ maxWidth: "18rem" }}
      />
      <img
        src="/assets/HofmannLogo-white.png"
        className="mx-auto"
        width="200px"
      />
      <blockquote className="max-w-4xl mx-auto font-sans italic  leading-loose text-xl p-8">
        “Emergence Labs used our unique target market and customer journey to
        improve our sales processes and get us up and running in Salesforce
        faster than we thought possible. The process has been successfully
        repeatable and we’re seeing great results from the successful Salesforce
        adoption amongst our sales team.”
      </blockquote>
      <span className="font-mono text-xs font-semibold">
        Vikram Kalia //{" "}
        <span className="font-thin text-xs">
          Strategic Planning, e.Hofman Plastics
        </span>
      </span>
    </section>
  )
}
