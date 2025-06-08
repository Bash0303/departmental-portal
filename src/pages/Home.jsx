import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Department of Computer Science</h1>
          <p className="text-xl mb-8">
            Departmental Portal, Institute of Information and Communication Technology, 
            Kwara State Polytechnic, Ilorin.
          </p>
          <button className="bg-secondary-light hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg flex items-center mx-auto transition duration-300">
            Explore More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">Why Choose Our Department?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Curriculum",
                description: "Covering fundamental theories to cutting-edge technologies like AI, cybersecurity, and software engineering."
              },
              {
                title: "Practical Experience",
                description: "Opportunities through internships, research projects, and team-based assignments."
              },
              {
                title: "Faculty Expertise",
                description: "Highly skilled and experienced faculty members dedicated to cutting-edge education."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-secondary-light">
                <h3 className="text-xl font-semibold mb-3 text-primary-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;