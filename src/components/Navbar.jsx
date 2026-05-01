import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const navLinks = [
    {
      title: 'HOME',
      href: '/',
      dropdown: null
    },
    {
      title: 'PROJECTS',
      href: '#',
      dropdown: [
        { title: 'WEB APPS', href: '/' },
        { title: 'MOBILE APPS', href: '/' },
        { title: 'UI/UX DESIGN', href: '/' }
      ]
    },
    // {
    //   title: 'SERVICES',
    //   href: '/',
    //   dropdown: [
    //     { title: 'Development', href: '/' },
    //     { title: 'Consulting', href: '/' },
    //     { title: 'Design', href: '/' }
    //   ]
    // },
    {
      title: 'ABOUT',
      href: '/',
      dropdown: [
        { title: 'MY STORY', href: '/' },
        { title: 'SKILLS', href: '/' },
        { title: 'EXPERIENCE', href: '/' }
      ]
    },
    {
      title: 'CONTACT',
      href: '/',
      dropdown: null
    }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="text-2xl font-mono font-extrabold text-grey-700 hover:text-blue-700 transition-colors">
              PORTFOLIO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 font-mono ">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="font-black text-xl text-l flex items-center px-4 py-2 text-gray-700 hover:text-blue-700 rounded-lg transition-all duration-200"
                >
                  {link.title}
                  {link.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.title && (
                  <div className="absolute left-0 mt-2 w-35 bg-white rounded-lg shadow-lg border border-gray-800 py-2 animate-fade-in-down">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-grey-800 hover:text-blue-700 transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <div key={link.title} className="px-2 py-2">
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.title ? null : link.title)}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {link.title}
                  {link.dropdown && <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${openDropdown === link.title ? 'rotate-180' : ''}`} />}
                </button>
                {link.dropdown && openDropdown === link.title && (
                  <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
