import FooterButton from "./footer-button"

export default function Footer() {
  return (
    <footer className="bg-emrg-black sm:p-24 p-12 text-white">
      <div className="flex flex-col md:flex-row w-full justify-between items-start mx-auto max-w-screen-xl">
        <div
          style={{ flexBasis: "25%" }}
          className="flex flex-col justify-between min-h-full items-stretch mb-12 md:mb-0"
        >
          <img src="/assets/emergence.svg" alt="Emergence Labs Wordmark Logo" />
        </div>
        <div
          className="flex justify-around items-start max-w-xl md:flex-row flex-col"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex flex-col flex-1 mx-8">
            <span className="font-serif text-xl font-semibold tracking-wider border-white border-b pb-2 mb-4 w-full">
              Navigate
            </span>
            <FooterButton label="Home" href="#" />
            <FooterButton label="About" href="#" />
            <FooterButton label="Services" href="#" />
            <FooterButton label="Contact" href="#" />
            <FooterButton label="Blog" href="#" />
          </div>

          <div className="flex flex-col flex-1 mx-8">
            <span className="font-serif text-xl font-semibold tracking-wider border-white border-b pb-2 mb-4 w-full">
              Explore
            </span>
            <a>LinkedIn</a>
            <a>AppExchange</a>
            <a>Github</a>
          </div>
        </div>
      </div>
      <a href="mailto:success@emergencelabs.io" className="font-semibold">
        success@emergencelabs.io
      </a>
      <p className="text-xs mt-4 mb-1">
        Made with
        <span role="img" aria-label="heart" className="mx-2">
          ❤️
        </span>
        in
        <span role="img" aria-label="canadian flag" className="mx-2">
          🇨🇦
        </span>
      </p>
      <p className="text-xs">© Emergence Labs 2020</p>
    </footer>
  )
}
