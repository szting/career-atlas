import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Briefcase, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">SG Career Compass</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="text-white hover:bg-blue-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                
                <div className="relative">
                  <button 
                    className="text-white hover:bg-blue-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Resources
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        <Link to="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Government Resources</Link>
                        <Link to="/frameworks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Career Frameworks</Link>
                        <Link to="/assessments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Assessment Tools</Link>
                      </div>
                    </div>
                  )}
                </div>
                
                <Link to="/dashboard" className="text-white hover:bg-blue-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/login" className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium">Login</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-500 hover:bg-opacity-75 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:bg-blue-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/resources" className="text-white hover:bg-blue-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Resources</Link>
            <Link to="/frameworks" className="text-white hover:bg-blue-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Frameworks</Link>
            <Link to="/assessments" className="text-white hover:bg-blue-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Assessments</Link>
            <Link to="/dashboard" className="text-white hover:bg-blue-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
            <Link to="/login" className="bg-white text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium mt-4">Login</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
