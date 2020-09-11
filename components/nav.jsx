import NavButton from "../components/nav-button"
export default function Nav() {
  return (
    <nav className="flex justify-between my-4 px-12 items-center">
      <div style={{ flexBasis: "25%" }}>
        <img src="/assets/emergence.svg" alt="Emergence Labs Wordmark Logo" />
      </div>
      <div>
        <NavButton href="/about" label="About" />
        <NavButton href="/blog" label="Services" />
        <NavButton href="/blog" label="Contact Us" />
      </div>
    </nav>
  )
}
