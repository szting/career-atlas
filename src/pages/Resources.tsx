import React, { useState } from 'react'
import { Search, ExternalLink, Download, BookOpen, Award, Briefcase, Building, GraduationCap } from 'lucide-react'

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'skills', name: 'Skills Development', icon: Award },
    { id: 'career', name: 'Career Transition', icon: Briefcase },
    { id: 'employers', name: 'For Employers', icon: Building },
    { id: 'education', name: 'Education & Training', icon: GraduationCap },
  ]

  const resources = [
    {
      id: 1,
      title: 'SkillsFuture Credit',
      description: 'Government initiative to encourage lifelong learning with credits for Singaporeans to take approved courses.',
      link: 'https://www.skillsfuture.gov.sg/credit',
      category: 'skills',
      agency: 'SkillsFuture Singapore',
      type: 'Program'
    },
    {
      id: 2,
      title: 'Career Trial',
      description: 'Try out a job for up to 3 months, with training allowance from the government, before formal employment.',
      link: 'https://www.wsg.gov.sg/programmes-and-initiatives/career-trial-employers.html',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Program'
    },
    {
      id: 3,
      title: 'Professional Conversion Programmes (PCPs)',
      description: 'Career conversion programmes to help mid-career switchers undergo skills conversion to take on new jobs.',
      link: 'https://www.wsg.gov.sg/programmes-and-initiatives/professional-conversion-programmes-individuals.html',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Program'
    },
    {
      id: 4,
      title: 'Career Support Programme (CSP)',
      description: 'Salary support to employers who hire eligible Singapore Citizen PMETs who are mature and/or long-term unemployed.',
      link: 'https://www.wsg.gov.sg/programmes-and-initiatives/career-support-programme-employers.html',
      category: 'employers',
      agency: 'Workforce Singapore',
      type: 'Grant'
    },
    {
      id: 5,
      title: 'MyCareersFuture Portal',
      description: 'Job portal with skills-matching capabilities to help Singaporeans find suitable jobs based on their skills.',
      link: 'https://www.mycareersfuture.gov.sg/',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Tool'
    },
    {
      id: 6,
      title: 'SkillsFuture for Enterprises',
      description: 'Support for companies to build capabilities and develop their workforce through various initiatives.',
      link: 'https://www.enterprisejobskills.gov.sg/content/upgrade-skills/skillsfuture-for-enterprises.html',
      category: 'employers',
      agency: 'SkillsFuture Singapore',
      type: 'Program'
    },
    {
      id: 7,
      title: 'Training Grants for Companies',
      description: 'Grants to support companies in sending their employees for training and skills upgrading.',
      link: 'https://www.ssg.gov.sg/programmes-and-initiatives/funding/funding-for-employer-based-training.html',
      category: 'employers',
      agency: 'SkillsFuture Singapore',
      type: 'Grant'
    },
    {
      id: 8,
      title: 'Skills Framework',
      description: 'Information on career pathways, occupations, job roles, skills and competencies, and training programs for various industries.',
      link: 'https://www.skillsfuture.gov.sg/skills-framework',
      category: 'skills',
      agency: 'SkillsFuture Singapore',
      type: 'Framework'
    },
    {
      id: 9,
      title: 'Continuing Education and Training (CET) Centers',
      description: 'Training centers offering courses for adult learners to upgrade their skills and stay relevant.',
      link: 'https://www.ssg.gov.sg/wsq/cet-centres.html',
      category: 'education',
      agency: 'SkillsFuture Singapore',
      type: 'Facility'
    },
    {
      id: 10,
      title: 'SGUnited Mid-Career Pathways Programme',
      description: 'Opportunities for mid-career individuals to gain industry-relevant experience and skills while preparing for more permanent roles.',
      link: 'https://www.wsg.gov.sg/programmes-and-initiatives/sgunitedmidcareerpathways-traineeship.html',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Program'
    },
    {
      id: 11,
      title: 'Career Matching Services',
      description: 'Personalized career coaching and job matching services to help individuals in their career journey.',
      link: 'https://www.wsg.gov.sg/career-services.html',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Service'
    },
    {
      id: 12,
      title: 'SkillsFuture Study Awards',
      description: 'Monetary award for individuals to develop and deepen their skills in future growth clusters.',
      link: 'https://www.skillsfuture.gov.sg/studyawards',
      category: 'education',
      agency: 'SkillsFuture Singapore',
      type: 'Award'
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Singapore Government Career Resources</h1>
          <p className="text-xl max-w-3xl">
            Access official resources, grants, and programs to support career development and workforce transformation.
          </p>
          
          <div className="mt-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-white focus:border-white sm:text-sm"
              placeholder="Search for resources, grants, programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
              </button>
            )
          })}
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Agency:</span> {resource.agency}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"<pivotalAction type="file" filePath="src/pages/Resources.tsx">
import React, { useState } from 'react'
import { Search, ExternalLink, Download, BookOpen, Award, Briefcase, Building, GraduationCap } from 'lucide-react'

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'skills', name: 'Skills Development', icon: Award },
    { id: 'career', name: 'Career Transition', icon: Briefcase },
    { id: 'employers', name: 'For Employers', icon: Building },
    { id: 'education', name: 'Education & Training', icon: GraduationCap },
  ]

  const resources = [
    {
      id: 1,
      title: 'SkillsFuture Credit',
      description: 'Government initiative to encourage lifelong learning with credits for Singaporeans to take approved courses.',
      link: 'https://www.skillsfuture.gov.sg/credit',
      category: 'skills',
      agency: 'SkillsFuture Singapore',
      type: 'Program'
    },
    {
      id: 2,
      title: 'Career Trial',
      description: 'Try out a job for up to 3 months, with training allowance from the government, before formal employment.',
      link: 'https://www.wsg.gov.sg/programmes-and-initiatives/career-trial-employers.html',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Program'
    },
    {
      id: 3,
      title: 'Professional Conversion Programmes (PCPs)',
      description: 'Career conversion programmes to help mid-career switchers undergo skills conversion to take on new jobs.',
      link: 'https://www.wsg.gov.sg/programmes-and-initiatives/professional-conversion-programmes-individuals.html',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Program'
    },
    {
      id: 4,
      title: 'Career Support Programme (CSP)',
      description: 'Salary support to employers who hire eligible Singapore Citizen PMETs who are mature and/or long-term unemployed.',
      link: 'https://www.wsg.gov.sg/programmes-and-initiatives/career-support-programme-employers.html',
      category: 'employers',
      agency: 'Workforce Singapore',
      type: 'Grant'
    },
    {
      id: 5,
      title: 'MyCareersFuture Portal',
      description: 'Job portal with skills-matching capabilities to help Singaporeans find suitable jobs based on their skills.',
      link: 'https://www.mycareersfuture.gov.sg/',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Tool'
    },
    {
      id: 6,
      title: 'SkillsFuture for Enterprises',
      description: 'Support for companies to build capabilities and develop their workforce through various initiatives.',
      link: 'https://www.enterprisejobskills.gov.sg/content/upgrade-skills/skillsfuture-for-enterprises.html',
      category: 'employers',
      agency: 'SkillsFuture Singapore',
      type: 'Program'
    },
    {
      id: 7,
      title: 'Training Grants for Companies',
      description: 'Grants to support companies in sending their employees for training and skills upgrading.',
      link: 'https://www.ssg.gov.sg/programmes-and-initiatives/funding/funding-for-employer-based-training.html',
      category: 'employers',
      agency: 'SkillsFuture Singapore',
      type: 'Grant'
    },
    {
      id: 8,
      title: 'Skills Framework',
      description: 'Information on career pathways, occupations, job roles, skills and competencies, and training programs for various industries.',
      link: 'https://www.skillsfuture.gov.sg/skills-framework',
      category: 'skills',
      agency: 'SkillsFuture Singapore',
      type: 'Framework'
    },
    {
      id: 9,
      title: 'Continuing Education and Training (CET) Centers',
      description: 'Training centers offering courses for adult learners to upgrade their skills and stay relevant.',
      link: 'https://www.ssg.gov.sg/wsq/cet-centres.html',
      category: 'education',
      agency: 'SkillsFuture Singapore',
      type: 'Facility'
    },
    {
      id: 10,
      title: 'SGUnited Mid-Career Pathways Programme',
      description: 'Opportunities for mid-career individuals to gain industry-relevant experience and skills while preparing for more permanent roles.',
      link: 'https://www.wsg.gov.sg/programmes-and-initiatives/sgunitedmidcareerpathways-traineeship.html',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Program'
    },
    {
      id: 11,
      title: 'Career Matching Services',
      description: 'Personalized career coaching and job matching services to help individuals in their career journey.',
      link: 'https://www.wsg.gov.sg/career-services.html',
      category: 'career',
      agency: 'Workforce Singapore',
      type: 'Service'
    },
    {
      id: 12,
      title: 'SkillsFuture Study Awards',
      description: 'Monetary award for individuals to develop and deepen their skills in future growth clusters.',
      link: 'https://www.skillsfuture.gov.sg/studyawards',
      category: 'education',
      agency: 'SkillsFuture Singapore',
      type: 'Award'
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Singapore Government Career Resources</h1>
          <p className="text-xl max-w-3xl">
            Access official resources, grants, and programs to support career development and workforce transformation.
          </p>
          
          <div className="mt-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-white focus:border-white sm:text-sm"
              placeholder="Search for resources, grants, programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
              </button>
            )
          })}
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Agency:</span> {resource.agency}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      Visit Resource <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                    <button className="text-gray-600 hover:text-gray-800 flex items-center">
                      <Download className="h-4 w-4 mr-1" /> Save
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">No resources found matching your criteria. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Resources
