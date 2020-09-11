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
        className={`flex justify-around items-center my-8 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="max-w-2xl">
          <video
            src="/assets/videos/success-desk.mp4"
            autoPlay
            loop
            className="w-full border border-gray-300 bg-white rounded-lg"
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
