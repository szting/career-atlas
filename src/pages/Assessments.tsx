import React, { useState } from 'react'
import { CheckCircle, ChevronRight, FileText, BarChart, Users, Brain, Lightbulb } from 'lucide-react'

const Assessments = () => {
  const [activeTab, setActiveTab] = useState('all')
  
  const assessmentCategories = [
    { id: 'all', name: 'All Assessments', icon: FileText },
    { id: 'skills', name: 'Skills Assessment', icon: BarChart },
    { id: 'personality', name: 'Personality', icon: Users },
    { id: 'interests', name: 'Interests', icon: Lightbulb },
    { id: 'values', name: 'Work Values', icon: Brain },
  ]
  
  const assessments = [
    {
      id: 1,
      title: 'Career Values Assessment',
      description: 'Identify your core work values and how they align with different career paths.',
      category: 'values',
      timeToComplete: '15-20 minutes',
      questions: 40,
      free: true,
      popular: true
    },
    {
      id: 2,
      title: 'Skills Confidence Inventory',
      description: 'Measure your confidence in performing various skills across different domains.',
      category: 'skills',
      timeToComplete: '25-30 minutes',
      questions: 60,
      free: false,
      popular: true
    },
    {
      id: 3,
      title: 'RIASEC Interest Profiler',
      description: 'Based on Holland's theory, identify your dominant interest areas and matching occupations.',
      category: 'interests',
      timeToComplete: '15-20 minutes',
      questions: 48,
      free: true,
      popular: true
    },
    {
      id: 4,
      title: 'Career Adaptability Scale',
      description: 'Assess your readiness to cope with current and anticipated career transitions.',
      category: 'skills',
      timeToComplete: '10-15 minutes',
      questions: 24,
      free: true,
      popular: false
    },
    {
      id: 5,
      title: 'Work Environment Preferences',
      description: 'Identify your ideal work environment characteristics and organizational culture.',
      category: 'values',
      timeToComplete: '15-20 minutes',
      questions: 35,
      free: true,
      popular: false
    },
    {
      id: 6,
      title: 'Career Decision-Making Profile',
      description: 'Understand your approach to making career decisions and potential blind spots.',
      category: 'personality',
      timeToComplete: '20-25 minutes',
      questions: 45,
      free: false,
      popular: false
    },
    {
      id: 7,
      title: 'Future Skills Self-Assessment',
      description: 'Evaluate your readiness for future skills needed in Singapore's economy.',
      category: 'skills',
      timeToComplete: '25-30 minutes',
      questions: 50,
      free: true,
      popular: true
    },
    {
      id: 8,
      title: 'Career Anchors Inventory',
      description: 'Based on Schein's theory, identify your career anchors that guide your career decisions.',
      category: 'values',
      timeToComplete: '20-25 minutes',
      questions: 40,
      free: false,
      popular: true
    },
    {
      id: 9,
      title: 'Emotional Intelligence for Career Success',
      description: 'Assess your emotional intelligence competencies relevant to workplace success.',
      category: 'personality',
      timeToComplete: '15-20 minutes',
      questions: 30,
      free: false,
      popular: false
    }
  ]
  
  const filteredAssessments = activeTab === 'all' 
    ? assessments 
    : assessments.filter(assessment => assessment.category === activeTab)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1<pivotalAction type="file" filePath="src/pages/Assessments.tsx">
import React, { useState } from 'react'
import { CheckCircle, ChevronRight, FileText, BarChart, Users, Brain, Lightbulb } from 'lucide-react'

const Assessments = () => {
  const [activeTab, setActiveTab] = useState('all')
  
  const assessmentCategories = [
    { id: 'all', name: 'All Assessments', icon: FileText },
    { id: 'skills', name: 'Skills Assessment', icon: BarChart },
    { id: 'personality', name: 'Personality', icon: Users },
    { id: 'interests', name: 'Interests', icon: Lightbulb },
    { id: 'values', name: 'Work Values', icon: Brain },
  ]
  
  const assessments = [
    {
      id: 1,
      title: 'Career Values Assessment',
      description: 'Identify your core work values and how they align with different career paths.',
      category: 'values',
      timeToComplete: '15-20 minutes',
      questions: 40,
      free: true,
      popular: true
    },
    {
      id: 2,
      title: 'Skills Confidence Inventory',
      description: 'Measure your confidence in performing various skills across different domains.',
      category: 'skills',
      timeToComplete: '25-30 minutes',
      questions: 60,
      free: false,
      popular: true
    },
    {
      id: 3,
      title: 'RIASEC Interest Profiler',
      description: 'Based on Holland's theory, identify your dominant interest areas and matching occupations.',
      category: 'interests',
      timeToComplete: '15-20 minutes',
      questions: 48,
      free: true,
      popular: true
    },
    {
      id: 4,
      title: 'Career Adaptability Scale',
      description: 'Assess your readiness to cope with current and anticipated career transitions.',
      category: 'skills',
      timeToComplete: '10-15 minutes',
      questions: 24,
      free: true,
      popular: false
    },
    {
      id: 5,
      title: 'Work Environment Preferences',
      description: 'Identify your ideal work environment characteristics and organizational culture.',
      category: 'values',
      timeToComplete: '15-20 minutes',
      questions: 35,
      free: true,
      popular: false
    },
    {
      id: 6,
      title: 'Career Decision-Making Profile',
      description: 'Understand your approach to making career decisions and potential blind spots.',
      category: 'personality',
      timeToComplete: '20-25 minutes',
      questions: 45,
      free: false,
      popular: false
    },
    {
      id: 7,
      title: 'Future Skills Self-Assessment',
      description: 'Evaluate your readiness for future skills needed in Singapore's economy.',
      category: 'skills',
      timeToComplete: '25-30 minutes',
      questions: 50,
      free: true,
      popular: true
    },
    {
      id: 8,
      title: 'Career Anchors Inventory',
      description: 'Based on Schein's theory, identify your career anchors that guide your career decisions.',
      category: 'values',
      timeToComplete: '20-25 minutes',
      questions: 40,
      free: false,
      popular: true
    },
    {
      id: 9,
      title: 'Emotional Intelligence for Career Success',
      description: 'Assess your emotional intelligence competencies relevant to workplace success.',
      category: 'personality',
      timeToComplete: '15-20 minutes',
      questions: 30,
      free: false,
      popular: false
    }
  ]
  
  const filteredAssessments = activeTab === 'all' 
    ? assessments 
    : assessments.filter(assessment => assessment.category === activeTab)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Career Assessment Tools</h1>
          <p className="text-xl max-w-3xl">
            Structured assessment tools grounded in psychological frameworks to guide career exploration and development.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {assessmentCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  activeTab === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
              </button>
            )
          })}
        </div>
        
        {/* Featured Assessments */}
        {activeTab === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Assessments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assessments
                .filter(assessment => assessment.popular)
                .map(assessment => (
                  <div key={assessment.id} className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{assessment.title}</h3>
                        {assessment.free ? (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Free
                          </span>
                        ) : (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{assessment.description}</p>
                      <div className="flex justify-between text-sm text-gray-500 mb-6">
                        <span>{assessment.timeToComplete}</span>
                        <span>{assessment.questions} questions</span>
                      </div>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center">
                        Start Assessment <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        
        {/* All Assessments */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {activeTab === 'all' ? 'All Assessments' : `${assessmentCategories.find(c => c.id === activeTab)?.name} Tools`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssessments.map(assessment => (
              <div key={assessment.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{assessment.title}</h3>
                    {assessment.free ? (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Free
                      </span>
                    ) : (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{assessment.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <span>{assessment.timeToComplete}</span>
                    <span>{assessment.questions} questions</span>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded flex items-center justify-center">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Assessment Process */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Assessments Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Complete Assessment</h3>
              <p className="text-gray-600">
                Answer questions designed by career development experts and psychologists.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Receive Personalized Report</h3>
              <p className="text-gray-600">
                Get detailed insights about your skills, interests, values, and potential career paths.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Discuss with a Coach</h3>
              <p className="text-gray-600">
                Review results with a career coach to develop actionable career development plans.
              </p>
            </div>
          </div>
        </div>
        
        {/* For Coaches Section */}
        <div className="mt-12 bg-teal-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-teal-900 mb-4">For Career Coaches & Supervisors</h2>
          <p className="text-teal-700 mb-4">
            Access interpretation guides and facilitation resources to effectively use these assessments in your coaching practice.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Access Coach Resources
          </button>
        </div>
      </div>
    </div>
  )
}

export default Assessments
