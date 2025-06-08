const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">About the Department</h1>
          <div className="w-24 h-1 bg-secondary-light mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg mb-6">
            The Department of Computer Science at Kwara State Polytechnic, Ilorin, offers a comprehensive program that prepares students for research and development leadership in computer science and technology, according to the Kwara State Polytechnic, Ilorin. The curriculum covers both theoretical and practical aspects of computer science, including areas like artificial intelligence, data science, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary-light">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Key Features of the Department</h2>
            <ul className="space-y-4">
              {[
                "Comprehensive Curriculum covering fundamental theories to cutting-edge technologies",
                "Practical Experience through internships and research projects",
                "Faculty Expertise with highly skilled and experienced members",
                "Research Focus in machine learning, network security, and cloud computing",
                "Support Resources including career counseling and networking opportunities"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block bg-secondary-light rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-light">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Curriculum Coverage</h2>
            <div className="space-y-3">
              {[
                "Fundamental theories of computer science",
                "Artificial Intelligence and Machine Learning",
                "Cybersecurity and Network Security",
                "Data Science and Big Data Analytics",
                "Software Engineering and Development",
                "Human-Computer Interaction",
                "Cloud Computing and Distributed Systems"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-2 w-2 bg-secondary-light rounded-full mr-3"></div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;