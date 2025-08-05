import React, { useState, useEffect } from 'react'
import { Menu, X, Gem } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Présentation', href: '#presentation' },
    { name: 'Territoires', href: '#territoires' },
    { name: 'Géographie', href: '#geographie' },
    { name: 'Histoire', href: '#histoire' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/90 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gem className={`w-8 h-8 ${isScrolled ? 'text-kasai-or' : 'text-white'}`} />
            <span className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-kasai-bleu' : 'text-white'
              }`}>
              Kasaï-Central
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:scale-105 ${isScrolled
                  ? 'text-gray-700 hover:text-kasai-or'
                  : 'text-white/90 hover:text-white'
                  }`}
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary">
            Tukeyenu bimpe !🎉
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-kasai-bleu' : 'text-white'
                }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-kasai-or font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">
                Planifier ma visite
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar