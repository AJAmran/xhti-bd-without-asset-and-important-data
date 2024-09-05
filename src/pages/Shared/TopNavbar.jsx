import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import XHTI_Logo from "../../assets/XHTI Logo.png";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className="px-4 py-2 flex justify-between items-center container mx-auto">
      <Link to="/" className="flex items-center">
        <img src={XHTI_Logo} alt="Logo" className="mr-4" />
        <h1 className="text-primary text-lg md:text-lg sm:text-base lg:text-2xl font-bold font-heading">
          Xinxian Hospitality Training Institute
        </h1>
      </Link>
      <div className="flex items-center">
        <div className="hidden md:flex items-center mr-6 text-gray-600">
          <Link
            to="mailto:info@xhtibd.com"
            className="font-semibold mr-4 flex items-center text-base md:text-lg"
          >
            <FaEnvelope className="mr-2 text-primary text-base md:text-lg" />
            info@xhtibd.com
          </Link>
          <span className=" mr-4 flex items-center text-gray-600">
            <FaPhone className="mr-2 text-primary" />
            <Link to="https://wa.me/+8801332-505246" className="font-semibold">+8801332-505246</Link>
          </span>
          <div className="flex items-center">
            <Link
              to="https://www.facebook.com/xhtibd"
              target="_blank"
              rel="noopener noreferrer"
              className=" mr-4 text-primary"
            >
              <FaFacebook className="text-xl" />
            </Link>
          </div>
        </div>
        <Link
          to="https://forms.gle/RqcDmcWpB8TBg1pYA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary text-white font-semibold  py-2 px-4 rounded-md text-sm md:text-base">
            Admission
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default TopNavbar;
