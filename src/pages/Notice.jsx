const Notice = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-dark mb-2">Notice</h1>
            <div className="w-24 h-1 bg-secondary-light mx-auto"></div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="font-semibold text-lg">Important Announcement</p>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              This is to notify all final students of ND II and HND II student to upload their Project soft copy on CORASS portal on before ending of this month of June, Best of luck.
            </p>
            <p className="text-gray-600">
              Visit our Portal for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;