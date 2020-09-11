export default function ConsultingServices({
  title,
  children,
  imageSrc,
  imgAlt,
  reverse
}) {
  return (
    <div className="">
      <div
        className={`flex justify-between items-center my-8 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 mx-4 max-w-xl">
          <h3 className="text-3xl text-emrg-purple font-serif font-semibold max-w-md">
            {title}
          </h3>
          {children}
        </div>
        <div className="max-w-xl hidden lg:block">
          <img src={imageSrc} alt={imgAlt} />
        </div>
      </div>
      <div className="ml-4">
        <h5 className="font-sans font-2xl mb-4 font-semibold">
          Our Implementation Packages
        </h5>
        <p>
          We offer packages for some reason and that will be explained
          here...All our packages are <i>configurable and extendable</i> as we
          understand every business has unique needs.
        </p>
      </div>
      <div className="flex justify-around md:flex-row flex-col">
        <a href="https://emergencelabs.io">
          <div className="mb-6 mx-4 flex sm:flex-row flex-col justify-around items-center border border-gray-300 bg-white rounded-lg p-4 hover:shadow-md duration-500 ease-in-out transition-shadow">
            <img
              src="/assets/rocket.png"
              alt="Emergence Labs Logo"
              className="w-16 mx-4"
            />
            <div className="flex-grow mt-4 sm:mt-0 text-center sm:text-left">
              <h6 className="font-semibold">Launch Pad Package</h6>
              <p className="my-2 text-sm leading-loose">
                Emergence Labs offers Salesforce Consulting and Development for
                emerging businesses. Our success is derived from the success of
                our clients.
              </p>
            </div>
          </div>
        </a>
        <a href="https://emergencelabs.io">
          <div className="mb-6 mx-4 flex sm:flex-row flex-col justify-around items-center border border-gray-300 bg-white rounded-lg p-4 hover:shadow-md duration-500 ease-in-out transition-shadow">
            <img
              src="/assets/rocket.png"
              alt="Emergence Labs Logo"
              className="w-16 mx-4"
            />
            <div className="flex-grow mt-4 sm:mt-0 text-center sm:text-left">
              <h6 className="font-semibold">Lift-Off Package</h6>
              <p className="my-2 text-sm leading-loose">
                Emergence Labs offers Salesforce Consulting and Development for
                emerging businesses. Our success is derived from the success of
                our clients.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
