import { Link } from "react-router-dom";
import { heroImage, minister, presidant } from "../../assets/images";

const Message = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20 py-12 bg-gray-100">
      {[
        {
          image: presidant,
          title: "President",
          alt: "Message from the President",
        },
        {
          image: minister,
          title: "Minister",
          alt: "Message from the Minister",
        },
        {
          image: heroImage,
          title: "State Minister",
          alt: "Message from the State Minister",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md flex flex-col justify-center items-center rounded-md p-8 transition-transform transform hover:scale-105"
        >
          <img
            src={card.image}
            alt={card.alt}
            className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full object-cover mb-4"
          />
          <p className="text-xl lg:text-2xl text-gray-800 font-semibold mb-2">
            Message from the {card.title}
          </p>
          <Link
            to={"/messages"}
            className="bg-primary px-6 py-3 rounded-full text-white hover:bg-blue-800 transition duration-300"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Message;
