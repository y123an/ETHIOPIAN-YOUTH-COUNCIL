import { useState } from "react";
import { GrClose } from "react-icons/gr";

const OrganizationCard = ({
  name,
  bio,
  address,
  country,
  yearOfEstablishment,
  email,
  pobox,
  category,
  phone,
  leaderShip,
}) => {
  const [detailVisible, setDetailVisible] = useState(false);

  return (
    <div className="max-w-[400px] mx-auto">
      <div
        className="p-4 cursor-pointer md:min-w-[400px] bg-white hover:bg-gray-100 transition duration-300 rounded-md shadow-md"
        onClick={() => setDetailVisible(true)}
      >
        <div className="mb-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <div className="text-sm text-gray-600">
          <p>{address}</p>
          <p>{country}</p>
          <p>Established: {yearOfEstablishment}</p>
        </div>
      </div>
      {detailVisible && (
        <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-md md:min-w-[700px] overflow-hidden max-w-[400px] w-full p-4">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setDetailVisible(false)}
              >
                <GrClose size={24} />
              </button>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-bold">{name}</h1>
              <p className="text-sm text-gray-500">{category}</p>
            </div>
            <div className="mt-2">
              <h1 className="text-md font-bold">Bio</h1>
              <p className="text-sm text-gray-600">{bio}</p>
            </div>
            <div className="mt-2">
              <h1 className="text-md font-bold">Address</h1>
              <div className="text-sm text-gray-600">
                <p>Country: {country}</p>
                <p>Location: {address}</p>
                <p>Email: {email}</p>
                <p>PO.Box: {pobox}</p>
                <p>Phone Number: {phone}</p>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-md font-bold">Leadership</h1>
              <p className="text-sm text-gray-600">{leaderShip}</p>
            </div>
            <div className="mt-2">
              <h1 className="text-md font-bold">Established Year</h1>
              <p className="text-sm text-gray-600">{yearOfEstablishment}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationCard;
