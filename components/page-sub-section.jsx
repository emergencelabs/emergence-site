export default function PageSubSection({
  title,
  children,
  imageSrc,
  imgAlt,
  reverse
}) {
  return (
    <div className="">
      <div
        className={`lg:flex-row-reverse flex flex-col-reverse justify-around items-center my-8 ${
          reverse ? "" : ""
        }`}
      >
        <div className="max-w-2xl">
          <video
            src="/assets/videos/success-desk.mp4"
            autoPlay
            loop
            muted
            className="w-full border border-gray-300 bg-white rounded-lg mt-4 lg:mt-0"
          ></video>
        </div>
        <div className="flex-1 mx-6 max-w-xl">
          <h3 className="text-3xl text-emrg-purple font-serif font-semibold max-w-md">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  )
}
