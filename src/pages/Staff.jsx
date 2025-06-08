import { useParams } from 'react-router-dom';

const Staff = () => {
  const { type } = useParams();
  
  // Staff data
  const academicStaff = [
    "Mr Oyedepo (F.S)",
    "Dr Agboola O.M",
    "Dr. Tosho",
    "Dr Raji A.k",
    "Dr Mrs. Dada",
    "Dr. Ayeni",
    "Dr Mrs Olusi",
    "Mrs. Akanbi",
    "Mr Bolaji Adetoro",
    "Mr Sadiq",
    "Mr Olajide",
    "Mr Isiaka",
    "Mrs. Abdulrahman",
    "Mr. Ismail",
    "Mr Abdulkareem",
    "Mr Saka",
    "Mr Muritala"
  ];

  const nonAcademicStaff = [
    "Mr Manjo",
    "Mr Apalando",
    "Mr Yusuf",
    "Mummy Goodness"
  ];

  const staffData = type === 'academic' ? academicStaff : nonAcademicStaff;
  const staffType = type === 'academic' ? 'Academic Staff' : 'Non-Academic Staff';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">{staffType}</h1>
          <div className="w-24 h-1 bg-secondary-light mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {staffData.map((staff, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary-light hover:bg-gray-100 transition-colors duration-200"
              >
                <p className="font-medium text-gray-800">{staff}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;