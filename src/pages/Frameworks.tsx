import React, { useState } from 'react'
import { BookOpen, ChevronDown, ChevronUp, Download } from 'lucide-react'

const Frameworks = () => {
  const [openFramework, setOpenFramework] = useState<number | null>(null)

  const toggleFramework = (id: number) => {
    if (openFramework === id) {
      setOpenFramework(null)
    } else {
      setOpenFramework(id)
    }
  }

  const frameworks = [
    {
      id: 1,
      title: "Holland's RIASEC Model",
      description: "A theory of careers and vocational choice based on personality types.",
      content: (
        <div>
          <p className="mb-4">
            Holland's theory suggests that most people can be categorized into six personality types:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><span className="font-medium">Realistic (R):</span> Practical, physical, hands-on, tool-oriented</li>
            <li><span className="font-medium">Investigative (I):</span> Analytical, intellectual, scientific, explorative</li>
            <li><span className="font-medium">Artistic (A):</span> Creative, original, independent, chaotic</li>
            <li><span className="font-medium">Social (S):</span> Cooperative, supporting, helping, healing/nurturing</li>
            <li><span className="font-medium">Enterprising (E):</span> Competitive environments, leadership, persuading</li>
            <li><span className="font-medium">Conventional (C):</span> Detail-oriented, organizing, clerical</li>
          </ul>
          <p className="mb-4">
            The theory proposes that career satisfaction depends on the match between personality and work environment. In the Singapore context, this framework helps individuals identify suitable career paths aligned with their personality traits and preferences.
          </p>
          <h4 className="font-medium text-lg mb-2">Application in Career Coaching:</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Administer a RIASEC assessment to identify dominant personality types</li>
            <li>Map results to Singapore's Skills Framework occupations</li>
            <li>Discuss alignment with current or potential career paths</li>
            <li>Identify potential growth areas or career transitions</li>
          </ol>
        </div>
      ),
      author: "John L. Holland",
      year: "1959",
      relevance: "High relevance for career exploration and job matching in Singapore's diverse economy"
    },
    {
      id: 2,
      title: "Super's Life-Span, Life-Space Theory",
      description: "A developmental model that describes how career patterns evolve over a person's lifetime.",
      content: (
        <div>
          <p className="mb-4">
            Super's theory views career development as a lifelong process occurring through five major life stages:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><span className="font-medium">Growth (ages 0-14):</span> Development of self-concept, attitudes, needs and general world of work</li>
            <li><span className="font-medium">Exploration (ages 15-24):</span> Trying out different roles and exploring occupations</li>
            <li><span className="font-medium">Establishment (ages 25-44):</span> Finding an appropriate field and making a place in it</li>
            <li><span className="font-medium">Maintenance (ages 45-64):</span> Continually adjusting to improve position</li>
            <li><span className="font-medium">Disengagement (ages 65+):</span> Reduced output, preparation for retirement</li>
          </ul>
          <p className="mb-4">
            In Singapore's context, this framework is particularly relevant as the workforce faces rapid technological changes requiring multiple career transitions throughout life. It helps individuals understand their current developmental stage and plan accordingly.
          </p>
          <h4 className="font-medium text-lg mb-2">Application in Career Coaching:</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Identify client's current life stage and career concerns</li>
            <li>Assess developmental tasks appropriate to their stage</li>
            <li>Connect to Singapore's SkillsFuture initiatives for relevant stage</li>
            <li>Develop strategies for successful navigation of current and upcoming transitions</li>
          </ol>
        </div>
      ),
      author: "Donald E. Super",
      year: "1957",
      relevance: "Highly applicable for Singapore's emphasis on lifelong learning and career transitions"
    },
    {
      id: 3,
      title: "Schein's Career Anchors",
      description: "A model identifying the underlying motivations that guide career decisions.",
      content: (
        <div>
          <p className="mb-4">
            Schein identified eight career anchors that represent an individual's self-concept consisting of:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><span className="font-medium">Technical/Functional Competence:</span> Driven by the opportunity to apply and develop technical and functional skills</li>
            <li><span className="font-medium">General Managerial Competence:</span> Motivated by the opportunity to lead and manage others</li>
            <li><span className="font-medium">Autonomy/Independence:</span> Desire for freedom from organizational constraints</li>
            <li><span className="font-medium">Security/Stability:</span> Need for job security and long-term stability</li>
            <li><span className="font-medium">Entrepreneurial Creativity:</span> Drive to create something new, taking risks</li>
            <li><span className="font-medium">Service/Dedication to a Cause:</span> Desire to pursue work that achieves something of value</li>
            <li><span className="font-medium">Pure Challenge:</span> Motivated by overcoming impossible obstacles or solving unsolvable problems</li>
            <li><span className="font-medium">Lifestyle:</span> Desire to integrate and balance personal and professional life</li>
          </ul>
          <p className="mb-4">
            For Singapore's workforce, understanding career anchors helps individuals make choices aligned with their core values, especially important in a competitive and fast-changing economy.
          </p>
          <h4 className="font-medium text-lg mb-2">Application in Career Coaching:</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Administer the Career Anchors Inventory</li>
            <li>Discuss results and validate primary anchors</li>
            <li>Analyze alignment with current role and organizational culture</li>
            <li>Identify potential conflicts and strategies for better alignment</li>
          </ol>
        </div>
      ),
      author: "Edgar H. Schein",
      year: "1978",
      relevance: "Valuable for understanding core motivations in Singapore's diverse workforce"
    },
    {
      id: 4,
      title: "Social Cognitive Career Theory (SCCT)",
      description: "A framework explaining how personal, environmental and behavioral factors influence career development.",
      content: (
        <div>
          <p className="mb-4">
            SCCT focuses on three key variables that influence career development:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><span className="font-medium">Self-efficacy beliefs:</span> People's judgments of their capabilities to perform particular tasks</li>
            <li><span className="font-medium">Outcome expectations:</span> Beliefs about the consequences of performing particular behaviors</li>
            <li><span className="font-medium">Personal goals:</span> Determination to engage in a particular activity or to affect a particular outcome</li>
          </ul>
          <p className="mb-4">
            In Singapore's meritocratic society, SCCT provides valuable insights into how individuals develop career interests, make choices, and achieve varying levels of success and satisfaction. It's particularly relevant for understanding how cultural and social factors influence career development.
          </p>
          <h4 className="font-medium text-lg mb-2">Application in Career Coaching:</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Assess client's self-efficacy in various career domains</li>
            <li>Identify limiting beliefs and environmental barriers</li>
            <li>Develop strategies to strengthen self-efficacy through learning experiences</li>
            <li>Connect to Singapore's support systems that can enhance career development</li>
          </ol>
        </div>
      ),
      author: "Robert W. Lent, Steven D. Brown, and Gail Hackett",
      year: "1994",
      relevance: "Highly relevant for understanding the psychological aspects of career development in Singapore"
    },
    {
      id: 5,
      title: "Planned Happenstance Theory",
      description: "A framework for turning unplanned events into career opportunities.",
      content: (
        <div>
          <p className="mb-4">
            Planned Happenstance Theory suggests that chance events play an important role in career development and emphasizes five skills:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><span className="font-medium">Curiosity:</span> Exploring new learning opportunities</li>
            <li><span className="font-medium">Persistence:</span> Exerting effort despite setbacks</li>
            <li><span className="font-medium">Flexibility:</span> Changing attitudes and circumstances</li>
            <li><span className="font-medium">Optimism:</span> Viewing new opportunities as possible and attainable</li>
            <li><span className="font-medium">Risk-taking:</span> Taking action in the face of uncertain outcomes</li>
          </ul>
          <p className="mb-4">
            In Singapore's rapidly evolving economy, this theory is particularly valuable as it helps individuals navigate uncertainty and transform unexpected events into career opportunities, especially relevant in industries undergoing digital transformation.
          </p>
          <h4 className="font-medium text-lg mb-2">Application in Career Coaching:</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Assess client's openness to unplanned opportunities</li>
            <li>Develop strategies for increasing chance encounters</li>
            <li>Build skills for capitalizing on unexpected events</li>
            <li>Create action plans that balance planning with openness to new possibilities</li>
          </ol>
        </div>
      ),
      author: "John D. Krumboltz",
      year: "1999",
      relevance: "Essential for navigating Singapore's dynamic job market and economic transitions"
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Career Development Frameworks</h1>
          <p className="text-xl max-w-3xl">
            Evidence-based career theories and frameworks adapted for the Singapore context to guide meaningful career development conversations.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using These Frameworks</h2>
          <p className="text-gray-700 mb-4">
            These evidence-based career development frameworks have been adapted to Singapore's unique context. They provide structured approaches for career coaches and supervisors to guide meaningful reflection and career planning conversations.
          </p>
          <p className="text-gray-700">
            Each framework includes practical application guidelines and reflection questions you can use with individuals at different career stages. Download the detailed guides for implementation tools and worksheets.
          </p>
        </div>
        
        <div className="space-y-6">
          {frameworks.map((framework) => (
            <div key={framework.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFramework(framework.id)}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{framework.title}</h3>
                  <p className="text-gray-600 mt-1">{framework.description}</p>
                </div>
                <div>
                  {openFramework === framework.id ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-blue-600" />
                  )}
                </div>
              </div>
              
              {openFramework === framework.id && (
                <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                  <div className="prose max-w-none">
                    {framework.content}
                  </div>
                  
                  <div className="mt-6 bg-gray-50 p-4 rounded-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Original Author:</span> {framework.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Year Developed:</span> {framework.year}
                        </p>
                      </div>
                      <div className="mt-3 sm:mt-0">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Singapore Relevance:</span> {framework.relevance}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <Download className="h-4 w-4 mr-2" />
                      Download Framework Guide
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-indigo-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Need Customized Framework Support?</h2>
          <p className="text-indigo-700 mb-4">
            Our team can help you adapt these frameworks for your specific organizational context or industry needs.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Request Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Frameworks
