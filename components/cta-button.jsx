import Link from "next/link"
import ArrowIcon from "./icons/arrow"

export default function CTAButton({ href, label }) {
  return (
    <Link href={href}>
      <a
        className="w-40 flex justify-between hover:bg-emrg-purple hover:border-transparent hover:text-white border-emrg-purple border text-emrg-purple rounded-md px-4 py-2 duration-500 ease-in-out transition-colors mx-1"
        type="button"
      >
        {label}
        <ArrowIcon className="w-4 fill-current" />
      </a>
    </Link>
  )
}
