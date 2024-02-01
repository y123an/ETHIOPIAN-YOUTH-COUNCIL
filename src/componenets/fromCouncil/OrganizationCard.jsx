import { useState } from "react";
import { GrClose, GrClosedCaption } from "react-icons/gr";

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
  const [detail, setDetail] = useState("hidden");
  return (
    <div>
      <div
        className="p-5 cursor-pointer hover:bg-[#f3f3f3]"
        onClick={() => setDetail("flex")}
      >
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
        <div className="font-light text-sm">
          <p>Country:{country}</p>
          <p>Adress: {address}</p>
          <p>Year Of Establishement: {yearOfEstablishment}</p>
        </div>
      </div>
      <div
        className={`absolute flex flex-col justify-center  items-center bg-black/[0.3] w-full h-full left-0 top-[400px] z-10 ${detail}`}
        onClick={() => setDetail("hidden")}
      >
        <div className="text-white flex ml-[720px] z-20">
          <button
            className="border rounded-full p-2"
            onClick={() => {
              setDetail("hidden");
            }}
          >
            <GrClose size={24} />
          </button>
        </div>
        <div className="z-20 flex flex-col gap-5 rounded-md bg-white h-[600px] w-[700px] p-5">
          <div>
            <h1 className="capitalize text-3xl font-extralight text-primary">
              {name}
            </h1>
            <p>{category}</p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Bio</h1>
            <p className="font-light text-justify">{bio}</p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Address</h1>
            <div className="flex gap-2">
              <p>Country: </p>
              <p className="font-light text-justify"> {country}</p>
            </div>
            <div className="flex gap-2">
              <p>Location: </p>
              <p className="font-light text-justify"> {address}</p>
            </div>
            <div className="flex gap-2">
              <p>Email: </p>
              <p className="font-light text-justify"> {email}</p>
            </div>
            <div className="flex gap-2">
              <p>PO.Box: </p>
              <p className="font-light text-justify"> {pobox}</p>
            </div>
            <div className="flex gap-2">
              <p>Phone Number: </p>
              <p className="font-light text-justify"> {phone}</p>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">LeaderShip</h1>
            <p className="font-light">{leaderShip}</p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Year Of Estabilishement</h1>
            <p className="font-light">{yearOfEstablishment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;
