import { useEffect, useRef } from "react"

export default function Preamble({ title, children }) {
  const titleRef = useRef(null)
  const keywords = ["Business", "Support", "Marketing"]
  let keywordIndex = 0
  let isDeleting = true
  useEffect(() => {
    let charIndex = keywords[keywordIndex].length - 1
    keywordIndex++
    const intervalId = setInterval(function () {
      if (isDeleting) {
        if (titleRef.current.innerText.length !== 0) {
          titleRef.current.innerText = titleRef.current.innerText.slice(
            0,
            charIndex + 1
          )
          charIndex--
        } else {
          isDeleting = false
          keywordIndex =
            keywordIndex === keywords.length - 1 ? 0 : keywordIndex + 1
          charIndex = 0
        }
      } else {
        const keyword = keywords[keywordIndex]
        if (titleRef.current.innerText.length !== keyword.length) {
          titleRef.current.innerText += keyword[charIndex]
          charIndex++
        } else {
          isDeleting = true
          keywordIndex =
            keywordIndex === keywords.length - 1 ? 0 : keywordIndex + 1
          charIndex = keywords[keywordIndex].length - 1
        }
      }
    }, 200)
    return () => clearInterval(intervalId)
  }, [])
  return (
    <section className="flex items-center justify-between mt-32 mb-20 slanted ">
      <div className="mx-12 max-w-xl typewriter">
        <h1 className="text-emrg-purple">
          Better{" "}
          <span id="typing" ref={titleRef} className="pl-4">
            {keywords[keywordIndex]}
          </span>{" "}
          <span className="block">Through Technology</span>
        </h1>
        {children}
      </div>
      <div className="mr-24 p-6 flex flex-col items-center justify-center rounded-lg">
        <img
          src="/assets/hello-computer.svg"
          alt="Emergence Labs Rocket Icon"
          width="100%"
          className="mb-8 mr-4"
        />
      </div>
    </section>
  )
}
