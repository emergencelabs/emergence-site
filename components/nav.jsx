import NavButton from "../components/nav-button"
import MenuIcon from "./icons/menu"
import { useState } from "react"

const MobileNav = ({ open }) =>
  open ? (
    <div className="w-screen h-screen z-10 bg-emrg-light-grey flex justify-center items-center fixed top-0 left-0">
      Mobile Nav
    </div>
  ) : null

export default function Nav() {
  const [isNavOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen((isOpen) => !isOpen)
  }

  return (
    <nav className="flex justify-between my-4 sm:px-12 p-8 items-center flex-row-reverse md:flex-row max-w-screen-xl mx-auto">
      <div
        style={{ flexBasis: "25%", minWidth: "12rem" }}
        className="sm:max-w-xs"
      >
        <img src="/assets/emergence.svg" alt="Emergence Labs Wordmark Logo" />
      </div>
      <div className="hidden md:block">
        <NavButton href="/about" label="About" />
        <NavButton href="/blog" label="Services" />
        <NavButton href="/blog" label="Contact Us" />
      </div>
      <button
        className="block md:hidden text-emrg-purple w-6 h-6 z-20"
        type="button"
        onClick={toggleNav}
      >
        <MenuIcon className="fill-current" />
      </button>
      <MobileNav open={isNavOpen} />
    </nav>
  )
}
