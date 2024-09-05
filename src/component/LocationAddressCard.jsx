import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LocationAddressCard = () => {
  return (
    <motion.section className="py-12">
      <div className="">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold font-heading text-gray-800">
            Visit Us
          </h2>
          <p className="mb-4 text-base sm:text-lg font-body font-semibold text-gray-600">
            Find us at the heart of Dhaka city. Visit us to explore our campus
            and learn more about our hospitality training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              to="https://maps.app.goo.gl/3F5tx2Ld7YYSWM8a6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to XHTI BD"
            >
              <button className="flex items-center justify-center px-4 py-2 text-sm sm:text-lg font-medium text-white transition-colors bg-primary border-2 border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent hover:bg-blue-500">
                <FaMapMarkerAlt className="mr-2" />
                Get Directions
              </button>
            </Link>
            <Link to="mailto:info@biccbd.com" aria-label="Email XHTI BD">
              <button className="flex items-center justify-center px-4 py-2 text-sm sm:text-lg font-medium text-white transition-colors bg-primary border-2 border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent hover:bg-blue-500">
                Email Us
              </button>
            </Link>
          </div>
          <div className="w-full h-64 sm:h-80 overflow-hidden border border-mutedText rounded-md shadow-md relative">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3894923569146!2d90.37902897468098!3d23.769140788057886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7512e22d8db%3A0x68643f58ee2ca74b!2zQmFuZ2FiYW5kaHUgSW50ZXJuYXRpb25hbCBDb25mZXJlbmNlIENlbnRlciwg4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1713695162266!5m2!1sbn!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute top-0 left-0 p-4 bg-gray-900 text-white rounded-b-md flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <Link className="text-base font-semibold text-justify">
                XINXIAN Hospitality Training Institute
                <br />
                Agargaon, Sher-E-Bangla Nagar, <br /> Dhaka-1207, Bangladesh
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationAddressCard;
