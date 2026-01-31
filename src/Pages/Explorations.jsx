import React, { useState } from "react"
import { Link } from "react-router-dom"

// Drive /view -> /preview (embeddable)
const DRIVE_VIDEO_PREVIEW =
    "https://drive.google.com/file/d/1-WUKjUng7v-jeTXWHjamSHj70vBUmo9P/preview"

const DRIVE_VIDEO_PREVIEWt =
    "https://drive.google.com/file/d/17bzwX4I0MQs6b97AhGysHJjaNpEeNwxR/preview"

const explorations = [
    {
        title: "Hydrogen Fuel Cell Study",
        desc: "A study on hydrogen fuel cells for electric vehicles along with further CAD experience.",
        tags: ["Design", "Energy/Power", "Sensors", "Human Factors"],
        mediaType: "gslides",
        mediaSrc:
            "https://docs.google.com/presentation/d/e/2PACX-1vQP6GKxfQenv9YvS-up9dkkCheJPVP3q8OPD2evAeFumpSvbWNQl3HMq7bJjHoKMqBtuPJTjHlfslYH/pubembed?start=true&loop=true&delayms=3000",
    },
    {
        title: "Lidar Scanning Robotics to 3D model",
        desc:
            "Control tuning, simulations, and experimental building of a lidar scanning model that uses a webcam and horizontal lazer to measure intensity of light and depth to create a 3D model.",
        tags: ["Control Systems", "Robotics", "CAD Design", "Micro Controllers"],
        mediaType: "image",
        mediaSrc: "/images/scannerthing.png",
    },
    {
        title: "Rocket Control and Fluid Dynamic Study",
        desc: "An exploration into sub-sonic rocket design and control.",
        longDesc:
            "A study into sub-sonic rocket design and control, including early CFD exploration, stability considerations, and how control requirements influence geometry and constraints.",
        tags: ["Prototyping", "Sensors", "Fluid Dynamics", "Design"],
        mediaType: "hover_slideshow",
        imageSrc: "/images/ROCKETTHING.png",
        slidesSrc:
            "https://docs.google.com/presentation/d/15uQSiPlDwm4mjh8fcOOmr7bRrY8yjGrKCDrLfaPlOzw/embed?start=false&loop=true&delayms=4000",
    },
    {
        title: "IBM 7535 AML Programming",
        desc: "Testing AML Programming with the IBM 7535 Robotic Arm.—hover to play.",
        longDesc:
            "Testing AML Programming with the IBM 7535 Robotic Arm. The code was made on notepad and debugged with...",
        tags: ["Demo", "Testing", "AML Programming", "Instruments"],
        mediaType: "hover_video",
        imageSrc: "/images/ibmtobot.png", // add a thumbnail image here
        videoSrc: DRIVE_VIDEO_PREVIEW,
    },
    {
        title: "Space Rover with Aeroponic and Healthcare Systems",
        desc:
            "For a design competition that takes place years in the future, my team and I developed a model of a rover that grows food with aeroponic planting and on board healthcare devices as well as a topographic camera to collect geographical data.",
        tags: ["Space", "Robotics", "CAD Design", "Micro Controllers"],
        mediaType: "image",
        mediaSrc: "/images/rover.png",
    },
    {
        title: "Open CV Machine Learning Automatic Camera Tilt",
        desc: "Made with OpenCV, Arduino, C++ and Python programming.",
        longDesc:
            "Using the OpenCV machine learning facial recognition module with python paired with a servo motor receiving signal motors on an Arduino Microcontroller to turn the camera towards the user to keep them centered",
        tags: ["Programming", "Machine Learning", "AML Programming", "Instruments"],
        mediaType: "hover_video",
        imageSrc: "/images/opencv.jpg", // add a thumbnail image here
        videoSrc: DRIVE_VIDEO_PREVIEWt,
    },
    {
        title: "Natural Disaster Monitoring Silly Satellite Design",
        desc:
            "Made for a design competition/hackathon, this satellite is designed to monitor wildfire and natural disasters and uses a learning module to predict future events.",
        tags: ["Aerospace", "Rendering", "CAD Design", "Fun"],
        mediaType: "image",
        mediaSrc: "/images/sillysatellite.png",
    },
    {
        title: "Plastic Reprocessing for 3D print Filament",
        desc:
            "For a week long ideation competition, we designed an early model of a plastic recycling machine that outputs reusable waste directly into a 3D printer",
        tags: ["Control Systems", "Robotics", "CAD Design", "Environmental"],
        mediaType: "image",
        mediaSrc: "/images/plastic.png",
    },
    {
        title: "Revit House Design",
        desc: "An exploration into Autodesk Revit floor plans",
        longDesc:
            "Designed using Autodesk Revit, this one floor bungalow is designed with a strong Mediterranean style influence in mind",
        tags: ["Prototyping", "Sensors", "Fluid Dynamics", "Design"],
        mediaType: "hover_slideshow",
        imageSrc: "/images/thikk.png",
        slidesSrc:
            "https://docs.google.com/presentation/d/e/2PACX-1vQVcAi8pieQ77BV8RRLDj3l2Zl2j0g1aIvDOXt2bjlgvHeLYTjdmn4FumHwRbYd-hGi_x1rfgxbn_PU/pubembed?start=false&loop=true&delayms=3000",
    },
    {
        title: "Stress monitoring mouse for ergonomic and mental comfort",
        desc:
            "A mouse that can track your health as you work through those stressful projects and encourages you to take breaks when necessary",
        tags: ["Ergonomics", "Healthcare", "CAD Design"],
        mediaType: "image",
        mediaSrc: "/images/edaMouse.png",
    },
    {
        title: "LabView Control Systems Tinkering",
        desc: "Learning Control Systems with LabView by National Instruments",
        tags: ["Control Systems", "Electrical Design", "Measurements/Instruments", "Signals & Systems"],
        mediaType: "image",
        mediaSrc: "/images/TemperatureMonitorActivity6.png",
    },
    {
        title: "Hydrogen Tank Supply Design",
        desc: "Using Inventor, this model of a hydrogen Tank Supply Design was made for a Competition",
        tags: ["Inventor", "Electrical Design", "Measurements/Instruments", "Rendering"],
        mediaType: "image",
        mediaSrc: "/images/frfcc.jpg",
    },
    {
        title: "FRC Robot Chassis Rendering",
        desc: "Rendered using Autodesk revolutionary cloud based resources",
        tags: ["Fusion360", "Electrical Design", "Rendering", "Actuators"],
        mediaType: "image",
        mediaSrc: "/images/tank.JPG",
    },
]



export default function Explorations() {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <main className="min-h-screen">
            <div className="pt-28">
                <div className="inner px-6 md:px-12">
                    {/* Header + Home button */}
                    <div className="flex items-start justify-between gap-6">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                                Explorations
                            </h1>

                            <p className="max-w-2xl text-sm md:text-base opacity-80 leading-relaxed">
                                Curiosity-driven experiments, side investigations, and in-progress ideas
                                that influence my larger engineering projects.
                            </p>
                        </div>

                        <Link
                            to="/"
                            className="
                mt-1 shrink-0
                text-sm md:text-base
                opacity-80 hover:opacity-100
                underline underline-offset-4
                whitespace-nowrap
              "
                        >
                            ← Go Home
                        </Link>
                    </div>

                    {/* Cards */}
                    <section
                        className="
              mt-10
              grid
              grid-cols-1
              md:grid-cols-[0fr_680px_64px_660px_1fr]
              gap-y-6
            "
                    >
                        {explorations.map((item, index) => {
                            // ✅ CHANGE: Alternate left/right forever (no more full-width cards)
                            const placement = index % 2 === 0 ? "md:col-start-2" : "md:col-start-4"

                            const isHovered = hoveredIndex === index

                            return (
                                <div
                                    key={item.title}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`
                    group relative
                    ${placement}
                    w-full rounded-xl
                    bg-white/5
                    px-5 py-4
                    shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:scale-[1.02]
                    hover:bg-white/[0.07]
                    will-change-transform
                  `}
                                >
                                    {/* MEDIA */}
                                    <div className="mb-4 overflow-hidden rounded-xl bg-black/40">
                                        <div className="relative">
                                            {item.mediaType === "gslides" ? (
                                                <>
                                                    <iframe
                                                        title={`${item.title} slideshow`}
                                                        src={item.mediaSrc}
                                                        className="h-100 w-full"
                                                        style={{ border: 0 }}
                                                        allow="autoplay; fullscreen"
                                                    />
                                                    <div className="pointer-events-none absolute inset-0 bg-black/20" />
                                                </>
                                            ) : item.mediaType === "image" ? (
                                                <>
                                                    <img
                                                        src={item.mediaSrc}
                                                        alt={item.title}
                                                        className="
                              h-100 w-full object-cover
                              transition-transform duration-500 ease-out
                              group-hover:scale-105
                            "
                                                        loading="lazy"
                                                    />
                                                    <div className="pointer-events-none absolute inset-0 bg-black/30" />
                                                </>
                                            ) : item.mediaType === "hover_slideshow" ? (
                                                <div className="relative h-100 w-full">
                                                    {/* Default image layer */}
                                                    <img
                                                        src={item.imageSrc}
                                                        alt={item.title}
                                                        className="
                              absolute inset-0 h-full w-full object-cover
                              transition-opacity duration-300
                              group-hover:opacity-0
                            "
                                                        loading="lazy"
                                                    />
                                                    <div className="pointer-events-none absolute inset-0 bg-black/35 transition-opacity duration-300 group-hover:opacity-0" />

                                                    {/* Hover reveal layer (slideshow) */}
                                                    <iframe
                                                        title={`${item.title} hover slideshow`}
                                                        src={item.slidesSrc}
                                                        className="
                              absolute inset-0 h-full w-full
                              opacity-0 transition-opacity duration-300
                              group-hover:opacity-100
                            "
                                                        style={{ border: 0 }}
                                                        allow="autoplay; fullscreen"
                                                    />
                                                    <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                                    {/* Hover hint */}
                                                    <div className="absolute bottom-2 left-2 rounded-full bg-black/55 px-3 py-1 text-xs opacity-90 transition-opacity duration-300 group-hover:opacity-0">
                                                        Hover for slides
                                                    </div>
                                                </div>
                                            ) : (
                                                // hover_video (hover to play)
                                                <div className="relative h-100 w-full">
                                                    {/* Default thumbnail */}
                                                    <img
                                                        src={item.imageSrc}
                                                        alt={`${item.title} thumbnail`}
                                                        className={`
                              absolute inset-0 h-full w-full object-cover
                              transition-opacity duration-300
                              ${isHovered ? "opacity-0" : "opacity-100"}
                            `}
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className={`
                              pointer-events-none absolute inset-0 bg-black/35
                              transition-opacity duration-300
                              ${isHovered ? "opacity-0" : "opacity-100"}
                            `}
                                                    />

                                                    {/* Hover reveal: Drive preview iframe (mount only on hover) */}
                                                    {isHovered && (
                                                        <iframe
                                                            title={`${item.title} video`}
                                                            src={`${item.videoSrc}?autoplay=1`}
                                                            className="absolute inset-0 h-full w-full"
                                                            style={{ border: 0 }}
                                                            allow="autoplay; encrypted-media"
                                                            allowFullScreen
                                                        />
                                                    )}

                                                    {/* Hover hint */}
                                                    <div
                                                        className={`
                              absolute bottom-2 left-2 rounded-full bg-black/55 px-3 py-1 text-xs
                              opacity-90 transition-opacity duration-300
                              ${isHovered ? "opacity-0" : "opacity-100"}
                            `}
                                                    >
                                                        Hover to play
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Title + short desc */}
                                    <h2 className="text-lg font-semibold">{item.title}</h2>

                                    <p className="mt-1 text-sm opacity-80 leading-relaxed">{item.desc}</p>

                                    {/* Tag chips */}
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="
                          inline-flex items-center rounded-full
                          px-2.5 py-1 text-xs
                          border border-white/15 bg-white/5
                          opacity-90
                        "
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>

                                    {/* Hover reveal: longer description (hover_slideshow & hover_video) */}
                                    {(item.mediaType === "hover_slideshow" || item.mediaType === "hover_video") && (
                                        <div
                                            className="
                        mt-4
                        rounded-xl
                        bg-black/20
                        p-4
                        shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]
                        opacity-0 translate-y-1
                        transition-all duration-300
                        group-hover:opacity-100 group-hover:translate-y-0
                      "
                                        >
                                            <p className="text-sm opacity-85 leading-relaxed">{item.longDesc}</p>

                                            {item.mediaType === "hover_video" && (
                                                <div className="mt-3 text-xs opacity-75">
                                                    Tip: If the video doesn’t play, click the top right{" "}
                                                    <span className="opacity-90">Pop-out button</span>.
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </section>
                </div>
            </div>
        </main>
    )
}
