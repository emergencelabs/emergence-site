import NavButton from "../components/nav-button";
import AdjustIcon from "../components/icons/adjust";
export default function Nav() {
  return (
    <nav className="flex justify-between my-8 p-4 items-center">
      <div className="flex">
        <NavButton href="/" label="Home" />
        <div className="flex justify-around">
          <NavButton href="/blog" label="Blog" />
          <NavButton href="/about" label="About" />
        </div>
      </div>
      <button className="w-5 h-5 opacity-75 hover:opacity-100 transform -translate-x-full">
        <AdjustIcon />
      </button>
    </nav>
  );
}
