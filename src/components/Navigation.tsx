import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card backdrop-blur-xl bg-background/80' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold gradient-text">
            Portfolio
          </div>

         <div className="hidden md:flex items-center justify-center space-x-8">
  {[
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Startup', id: 'startup' },
    { label: 'Skills', id: 'skills' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Contact', id: 'contact' }
  ].map((item) => (
    item.id === 'blogs' ? (
      <Link
        key={item.id}
        to="/blogs"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {item.label}
      </Link>
    ) : (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {item.label}
      </button>
    )
  ))}
</div>
</div>
</div>
</nav>
  )
}
export { Navigation }
