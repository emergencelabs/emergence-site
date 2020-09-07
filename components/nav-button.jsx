import Link from "next/link";

export default function NavButton({ href, label }) {
  return (
    <Link href={href}>
      <a
        className="hover:bg-gray-300 rounded-md px-4 py-2 duration-500 ease-in-out transition-colors"
        type="button"
      >
        {label}
      </a>
    </Link>
  );
}
