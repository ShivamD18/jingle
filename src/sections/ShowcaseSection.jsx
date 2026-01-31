import { useRef } from "react"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const AppShowcase = () => {
  const sectionRef = useRef(null)
  const rydeRef = useRef(null)
  const libraryRef = useRef(null)
  const ycDirectoryRef = useRef(null)

  useGSAP(() => {
    // Fade in entire section
    gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
    )

    // Animate individual cards
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current]

    cards.forEach((card, index) => {
      gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
      )
    })
  }, [])

  return (
      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          {/* === PROJECT SHOWCASE LAYOUT === */}
          <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
              <div className="image-wrapper">
                <img src="/images/scannerthing.png" alt="Ryde App Interface" />
              </div>
              <div className="text-content">
                <h2>
                  Webcam Lidar Sensor to 3D CAD Models
                </h2>
                <p className="text-white-50 md:text-xl">
                  Control tuning, simulations, and experimental building of a lidar scanning model that uses a webcam and horizontal lazer to measure intensity of light and depth to create a 3D model
                </p>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={libraryRef}>
                <div className="image-wrapper bg-[#000000]">
                  <img
                      src="/images/chassy.png"
                      alt="Library Management Platform"
                  />
                </div>
                <h2>Hydrogen Car Chassis design with Fusion360</h2>
              </div>

              <div className="project" ref={ycDirectoryRef}>
                <div className="image-wrapper bg-[#000000]">
                  <img
                      src="/images/ibmobot.jpg"
                      alt="YC Directory App"
                  />
                </div>
                <h2>AML Programming with IBM7535 Robot</h2>
              </div>
            </div>
          </div>

          {/* === CTA BELOW SHOWCASE === */}
          <div className="mt-20 flex w-full justify-center">
            <Link
                to="/explorations"
                className="
              group inline-flex items-center gap-3
              rounded-full
              border border-white/50
              bg-white/10 hover:bg-white/25
              px-8 py-4
              text-base md:text-lg
              italic font-medium
              opacity-90
              transition-all duration-300
              hover:border-white/60 hover:opacity-100
              hover:scale-[1.03]
              hover:shadow-[0_0_0_6px_rgba(255,255,255,0.03)]
            "
            >
              View More Projects in Explorations
              <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default AppShowcase
