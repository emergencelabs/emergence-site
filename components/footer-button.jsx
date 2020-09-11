import Link from "next/link"
import ArrowIcon from "./icons/arrow"

export default function FooterButton({ href, label }) {
  return (
    <Link href={href}>
      <a
        className="group border-b border-transparent py-2 my-1  text-white w-1/2 text-sm inline"
        type="button"
      >
        {label}
        <ArrowIcon className="w-4 fill-current opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition inline ml-4" />
      </a>
    </Link>
  )
}
