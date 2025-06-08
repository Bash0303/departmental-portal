const StaffCard = ({ name, position, qualification, email, phone, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-secondary-light p-4 text-white text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{position}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-center mb-4">
          <img 
            src={image || "https://via.placeholder.com/150"} 
            alt={name}
            className="h-32 w-32 rounded-full object-cover border-4 border-secondary-light"
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm"><span className="font-semibold">Qualification:</span> {qualification}</p>
          <p className="text-sm"><span className="font-semibold">Email:</span> {email}</p>
          <p className="text-sm"><span className="font-semibold">Phone:</span> {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;