import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { navLinks } from "../constants"

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToHash = (hash) => {
    const id = hash.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const onNavClick = (link) => {
    const isHash = link.startsWith("#")

    // If already on home, just scroll
    if (isHash && location.pathname === "/") {
      scrollToHash(link)
      return
    }

    // If hash link from another page, go home with hash
    if (isHash) {
      navigate(`/${link}`) // "/#projects"
      return
    }

    // Normal route (e.g. "/explorations")
    navigate(link)
  }

  return (
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <Link to="/" className="logo">
            SHIVAM DAVE
          </Link>

          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                  <li key={name} className="group">
                    <button onClick={() => onNavClick(link)} className="nav-btn">
                      <span>{name}</span>
                      <span className="underline" />
                    </button>
                  </li>
              ))}
            </ul>
          </nav>

          <button onClick={() => onNavClick("#contact")} className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </button>
        </div>
      </header>
  )
}

export default NavBar
