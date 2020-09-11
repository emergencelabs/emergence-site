import ArrowIcon from "./icons/arrow"

export default function ServicesItem() {
  return (
    // <div className="flex justify-between items-center  my-24">
    //   <div className="mr-12">
    //     <img
    //       src="/assets/click-tile.svg"
    //       alt="A decorative icon"
    //       className="w-full h-full"
    //     />
    //   </div>
    //   <div className="w-4/5">
    //     <h4 className="text-2xl font-serif font-semibold max-w-md">
    //       Sales Process Consulting
    //     </h4>
    //     <p className="leading-relaxed">
    //       Our team provides sales consulting services for your unique business
    //       challenges. We have the experience needed to quickly build and deliver
    //       any solutions required to be more efficient and effective. We love to
    //       take on the most challenging business problems and create solutions
    //       that help our clients close more deals, get more leads, and accelerate
    //       productivity.
    //     </p>
    //   </div>
    // </div>
    <div className=" group my-6 flex justify-around items-center border border-gray-300 bg-white rounded-lg p-4 hover:shadow-md duration-500 ease-in-out transition-shadow">
      <img src="assets/click-tile.svg" alt="decorative" className="w-24 mx-4" />
      <div className="flex-grow">
        <h6 className="font-semibold">Sales Process Consulting</h6>
        <p className="my-2 text-sm">
          Our team provides sales consulting services for your unique business
          challenges. We have the experience needed to quickly build and deliver
          any solutions required to be more efficient and effective. We love to
          take on the most challenging business problems and create solutions
          that help our clients close more deals, get more leads, and accelerate
          productivity.
        </p>
      </div>
    </div>
  )
}
