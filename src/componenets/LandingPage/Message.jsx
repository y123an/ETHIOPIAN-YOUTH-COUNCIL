import { Link } from "react-router-dom";
import { heroImage, minister, presidant } from "../../assets/images";
const Message = () => {
  return (
    <div className="flex justify-between px-10 py-5">
      <div className="bg-primary/75 flex gap-3 capitalize flex-col justify-center items-center rounded-md p-10">
        <img src={presidant} alt="" className="w-[300px]" />
        <p className="text-3xl text-white font-light">
          Message from the presidant
        </p>
        <Link to={"/messages"} className="bg-[#f3f3f3] px-4 py-2 rounded-sm">
          Read More
        </Link>
      </div>
      <div className="bg-primary/75 flex gap-3 capitalize flex-col justify-center items-center rounded-md p-10">
        <img src={minister} alt="" className="h-[200px]" />
        <p className="text-3xl text-white font-light">
          Message from the Miniser
        </p>
        <Link to={"/messages"} className="bg-[#f3f3f3] px-4 py-2 rounded-sm">
          Read More
        </Link>
      </div>
      <div className="bg-primary/75 flex gap-3 capitalize flex-col justify-center items-center rounded-md p-10">
        <img src={heroImage} alt="" className="w-[300px]" />
        <p className="text-3xl text-white font-light">
          Message from the State minister
        </p>
        <Link to={"/messages"} className="bg-[#f3f3f3] px-4 py-2 rounded-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Message;
/* 

*/
