import HeroSection from "../../component/HeroSection";
import aboutImage from "../../assets/about.jpg";
import LocationAddressCard from "../../component/LocationAddressCard";
import OverviewSection from "../../component/aboutPage/OverviewSection";
import AtAGlanceSection from "../../component/aboutPage/AtAGlanceSection";
import CareerPathsSection from "../../component/aboutPage/CareerPathsSection";
import { Helmet } from "react-helmet";
import useScrollToSection from "../../utils/HashedValue";

const Ldata = {
  text1: "Get Started",
  text2: "Registration",
  link1: "/",
  link2: "/admission",
};

const About = () => {
  useScrollToSection();

  const data = {
    image: aboutImage,
    title: "About Xinxian Hospitality Training Institute",
    description:
      "To be the leading provider of hospitality education in the region, recognized for our commitment to excellence, innovation, and inclusivity.",
    link: "/courses",
    btn: "Courses",
    secondButton: "Get Started",
  };

  return (
    <>
      <Helmet>
        <title>XHTIBD || About</title>
        <meta
          name="description"
          content="About of Xinxian Hospitality Training Institute"
        />
      </Helmet>
      <HeroSection data={data} />
      <div className="container mx-auto p-4">
        <div id="overview">
          <OverviewSection />
        </div>
        <div id="at-a-glance">
          <AtAGlanceSection />
        </div>
        <section id="carrer-paht">
          <CareerPathsSection />
        </section>
        <LocationAddressCard Ldata={Ldata} />
      </div>
    </>
  );
};

export default About;
