import { motion } from "framer-motion";
import { BsFillLightningFill } from "react-icons/bs";
import whyChooseUsImage from "../../assets/why-choose-us.jpg";
import HeroSection from "../../component/HeroSection";
import LocationAddressCard from "../../component/LocationAddressCard";
const data = {
  image: whyChooseUsImage,
  title: "Why Choose Us",
  description:
    "Discover the reasons why XINXIAN Hospitality Training Institute is the ideal choice for your hospitality education.",
  link: "/courses",
  btn: "Courses",
  secondButton: "Get Started",
};
const WhyChooseUsPage = () => {
  return (
    <>
      <HeroSection data={data} />
      <motion.section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-3xl font-semibold mb-4 font-heading text-gray-800">
              Discover the reasons why XINXIAN Hospitality Training Institute is
              the ideal choice for your hospitality education.
            </p>
          </div>
          <div>
            <ul className="list-disc list-inside text-gray-800 text-justify">
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Fully air-conditioned campus with all modern classroom
                amenities.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Free English course for Tourism & Hospitality Industry.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Faculties are experienced, highly qualified from industry as
                well as different universities.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                XHTI focuses on providing hands-on experience to its students so
                that they are ready to exploit their skills when they graduate.
                Accordingly, the institute has built state-of-the-art facilities
                to benefit both the teachers and the students.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                The institute has a full-fledged commercial kitchen, a
                restaurant and coffee shop, which remain open seven days a week.
                Served in the restaurant is national, oriental, Chinese and
                western cuisine.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Own Campus in the prime location of the city.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                The Lab room of food & Beverage Service has all equipment’s &
                materials related training.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                It is equipped with digital and other necessary teaching aids.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                TVET specialists’ faculties for classes like for Diploma in
                Hotel Management, Diploma in Professional Cookery & Service in
                level 2 of BTEB & NSDA.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Guaranteed attachment in 5-Star hotels & X-Group chain
                restaurant & hospitality management such as XINXIAN, Four
                Seasons etc. for qualified trainees of Certificate and Diploma
                courses.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Excellent ambiance of XHTI encourages the students to learn in a
                completely non-smoking campus.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                100 % job placement assistance for students
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                “Work & Study” learning environment.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Accommodation including hostel facilities for students in a
                group, females also have apartment rent facilities with
                reference and directions form XHTI.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Resource center for reference and text books, mostly on-line
                resources are available.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Centrally located in the heart of Dhaka city only 2 minutes’
                drive form Metro Rail, easily accessible from any point of
                Dhaka.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Since the commencement of its journey in 1992, X-Group Chain
                Restaurant & Hospitality Management has been committed to
                providing guest satisfaction, maintaining ethics & values and
                enhancing classic environment in our hospitality business that
                will relay in our training center who come to learn.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                We have been committed to providing students with the right
                combination of all the essential components required for
                attaining excellence in learning.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                The focus here is to impart quality education and to train the
                students to become visionary leaders in the fields of tourism.
              </li>
              <li className="mb-6 flex items-start">
                <span className="mr-4">
                  <BsFillLightningFill className="text-yellow-500 text-lg" />
                </span>
                Our striking features are including convenient location at the
                heart of Dhaka city just opposite to Mirpur 10 station of metro
                rail & Mirpur Cricket Stadium, a wide range of opportunities for
                practicing co-curricular activities like games and sports,
                cultural exchange programs, debating club, language club,
                tourism club etc.
              </li>
              {/* Add more list items here */}
            </ul>
          </div>
        </div>
      </motion.section>
      <LocationAddressCard />
    </>
  );
};

export default WhyChooseUsPage;
