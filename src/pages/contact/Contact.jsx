import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import HeroSection from "../../component/HeroSection";
import ContactPageImg from "../../assets/about.jpg";
import LocationAddressCard from "../../component/LocationAddressCard";
import { Helmet } from "react-helmet";
import useScrollToSection from "../../utils/HashedValue";

const data = {
  image: ContactPageImg,
  title: "Connect with Us",
  description:
    "We're excited to hear from you! Reach out to us for any inquiries, feedback, or assistance. Our team is here to help you.",
  link: "/courses",
  btn: "Courses",
  secondButton: "Get Started",
};

const Ldata = {
  text1: "Get Started",
  text2: "Our Courses",
  link1: "/",
  link2: "/courses",
};

const ContactPage = () => {
  useScrollToSection();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://xhtibd.com/sendMessage.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert("There was a problem with your submission, please try again.");
    }

    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - XHTIBD</title>
        <meta
          name="description"
          content="Contact Xinxian Hospitality Training Institute for any inquiries, feedback, or assistance. Our team is here to help you."
        />
        <meta
          name="keywords"
          content="XHTIBD, Contact, Hospitality, Training Institute"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <HeroSection data={data} />
      <div className="container mx-auto p-4">
        <motion.section className="py-16">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <div className="mb-8" id="address">
                  <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                    Contact Us
                  </h2>
                  <div className="flex items-center mb-4 text-gray-800">
                    <FaMapMarkerAlt size={20} className="mr-2" />
                    <p>
                      XINXIAN Hospitality Training Institute, Agargaon,
                      Sher-E-Bangla Nagar, Dhaka-1207, Bangladesh
                    </p>
                  </div>
                  <div className="flex items-center mb-4 text-gray-800">
                    <FaPhone className="mr-2" />
                    <p>+8801332505246, +8801332505247, +8801332505248</p>
                  </div>
                  <div className="flex items-center mb-4 text-gray-800">
                    <FaEnvelope className="mr-2" />
                    <p>info@xhtibd.com</p>
                  </div>
                  <p className="text-gray-800">
                    Stay connected with us on social media for the latest news,
                    updates, and events.
                  </p>
                </div>
              </div>
              <div
                className="bg-gray-200 p-8 rounded-lg shadow"
                id="get-in-touch"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                      className={`mt-1 p-2 w-full border ${
                        errors.name ? "border-red-500" : "border-gray-400"
                      } bg-white rounded-md focus:ring-primary focus:border-blue-500`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className={`mt-1 p-2 w-full border ${
                        errors.phone ? "border-red-500" : "border-gray-400"
                      } bg-white rounded-md focus:ring-primary focus:border-blue-500`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email address",
                        },
                      })}
                      className={`mt-1 p-2 w-full border ${
                        errors.email ? "border-red-500" : "border-gray-400"
                      } bg-white rounded-md focus:ring-primary focus:border-blue-500`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      rows="4"
                      className={`mt-1 p-2 w-full border ${
                        errors.message ? "border-red-500" : "border-gray-400"
                      } bg-white rounded-md focus:ring-primary focus:border-blue-500`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
        <LocationAddressCard Ldata={Ldata} />
      </div>
    </>
  );
};

export default ContactPage;
