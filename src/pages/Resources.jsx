const Resources = () => {
  const researchTopics = [
    "Automated Attendance System",
    "Chatbot for Educational Support",
    "Online Examination System",
    "Virtual Reality (VR) Classroom",
    "Health Monitoring System",
    "Predictive Text Analytics for Education",
    "Intelligent Tutoring System",
    "Blockchain-Based Credential Verification",
    "Smart Home Automation System",
    "Gesture Recognition for Human-Computer Interaction",
    "Cybersecurity Awareness Platform",
    "Automated Code Review System",
    "Language Translation App with Natural Language Processing (NLP)",
    "E-commerce Recommendation System",
    "Augmented Reality (AR) Navigation for Campus",
    "IoT-Based Smart Parking System",
    "Data Visualization for Educational Analytics",
    "Biometric Security System",
    "Computer Vision-Based Object Recognition",
    "Social Networking Platform for Academia"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Resources</h1>
          <p className="text-lg text-gray-600">For Students into HND and ND</p>
          <div className="w-24 h-1 bg-secondary-light mx-auto mt-4"></div>
        </div>

        <div className="space-y-12">
          {/* Admission Requirements */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">Admission Requirements</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-secondary-light pl-4">
                <h3 className="text-xl font-semibold mb-3">National Diploma (ND)</h3>
                <div className="space-y-4">
                  <h4 className="font-semibold">Cutoff Mark</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The cutoff mark for ND programs is generally 120 in the UTME.</li>
                    <li>Specific course cutoff marks may vary.</li>
                    <li>5 O/L credits, including Mathematics and English</li>
                  </ul>
                  
                  <h4 className="font-semibold">Requirements</h4>
                  <p className="text-gray-700">
                    To be considered for admission into the ND programmes, applicants must have a minimum of five O/L credits in relevant subjects at SSCE, GCE, NECO, and NABTEB at not more than two sittings. Credit passes in Mathematics and English Language are compulsory for all applicants. The other three subjects must be relevant to the course of choice.
                  </p>
                  
                  <h4 className="font-semibold">Application Process</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a JAMB profile on <a href="https://www.jamb.org.ng" className="text-secondary-light hover:underline">www.jamb.org.ng</a>.</li>
                    <li>Complete the JAMB UTME registration, choosing Kwara State Polytechnic as your institution.</li>
                    <li>Upload O'level results and required documents on the JAMB portal.</li>
                    <li>Print JAMB UTME result slip and await the Polytechnic's Post-UTME screening.</li>
                    <li>Apply online at <a href="https://www.kwarastatepolytechnic.edu.ng" className="text-secondary-light hover:underline">www.kwarastatepolytechnic.edu.ng</a>, selecting "UTME" as your mode of entry.</li>
                    <li>Pay the application fee online, submit the form, and print the acknowledgment slip</li>
                  </ol>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="font-semibold">NOTE</p>
                    <p>Stay updated on cutoff marks and admission details through the institution's website or admissions office.</p>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-primary-light pl-4">
                <h3 className="text-xl font-semibold mb-3">Higher National Diploma (HND)</h3>
                <div className="space-y-4">
                  <h4 className="font-semibold">Entrance Criteria</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Holders of ND or its equivalent with a minimum Lower Credit (CGPA of 2.50).</li>
                    <li>Completion of a one-year Industrial Training (IT) program.</li>
                    <li>Minimum one-year post-ND working experience.</li>
                    <li>Five O'level credit passes, including Mathematics and English Language in relevant subjects.</li>
                  </ul>
                  
                  <h4 className="font-semibold">Application Process</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Apply online at <a href="https://www.kwarastatepolytechnic.edu.ng" className="text-secondary-light hover:underline">www.kwarastatepolytechnic.edu.ng</a>, selecting "HND" as your mode of entry.</li>
                    <li>Fill the form with accurate information and upload required documents.</li>
                    <li>Pay the application fee online and submit the form.</li>
                    <li>Print the acknowledgment slip and await the Polytechnic's screening.</li>
                  </ol>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="font-semibold">NOTE</p>
                    <p>Regularly check the institution's website or admissions office for updated information on deadlines and procedures.</p>
                    <p className="mt-2">Best of luck with your application!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Course Outline */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Course Outline for Computer Science</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p>To be added soon</p>
            </div>
          </div>
          
          {/* Research Works */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-primary-dark mb-4">Research in Computer Science</h2>
            <p className="mb-4">
              Undertaking Program research allows you to develop in-depth knowledge while making a meaningful contribution to your chosen field. The School of Advanced Study's eight world-renowned institutes offer expertise in a broad range of humanities disciplines.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-secondary-dark">List of Best Research in Computer Science</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchTopics.map((topic, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-4 border-secondary-light hover:bg-gray-100 transition-colors duration-200">
                  <p>{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;