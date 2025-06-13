import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, BarChart, Award } from 'lucide-react'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Career Development in Singapore
            </h1>
            <p className="text-xl mb-8">
              Combining Singapore's government resources with evidence-based career development theories to provide structured guidance for supervisors and career coaches.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/resources" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-base font-medium inline-flex items-center">
                Explore Resources <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/assessments" className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md text-base font-medium">
                Try Assessment Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Career Development Resources</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Access a wide range of tools and frameworks designed specifically for Singapore's workforce development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Resources</h3>
              <p className="text-gray-600">
                Access Singapore's official career resources, grants, and programs to support workforce development.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coaching Frameworks</h3>
              <p className="text-gray-600">
                Evidence-based career development theories and frameworks adapted for the Singapore context.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment Tools</h3>
              <p className="text-gray-600">
                Structured reflection exercises and assessment tools grounded in psychological frameworks.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Development</h3>
              <p className="text-gray-600">
                Resources for supervisors and career coaches to enhance their career guidance capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Career Professionals</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from supervisors and career coaches who have transformed their approach to career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" 
                  alt="Sarah Lim" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Sarah Lim</h4>
                  <p className="text-gray-600">HR Director, Tech Solutions SG</p>
                </div>
              </div>
              <p className="text-gray-700">
                "This platform has transformed how we approach career development conversations. The structured frameworks make it easy to guide employees through meaningful reflection."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" 
                  alt="Raj Mehta" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Raj Mehta</h4>
                  <p className="text-gray-600">Career Coach, Workforce Singapore</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Having all the government resources integrated with evidence-based frameworks in one place has been invaluable. I can now provide more targeted guidance to my clients."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" 
                  alt="Michelle Tan" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Michelle Tan</h4>
                  <p className="text-gray-600">Department Head, Ministry of Manpower</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The assessment tools have helped us identify skill gaps and development opportunities more effectively. This platform bridges theory and practical application beautifully."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Career Development?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of career professionals using our platform to provide structured, evidence-based career guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/login" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-base font-medium">
              Create Account
            </Link>
            <Link to="/resources" className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md text-base font-medium">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
