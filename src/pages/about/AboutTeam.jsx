import React from "react";
import { motion } from "framer-motion";
import { messages, team } from "../../data/TeamData";
import md from "../../assets/TeamPhoto/01. Jashim Uddin Ahmed.jpg";
import ceo from "../../assets/TeamPhoto/02. Md. Jahangir.jpeg";
import manager from "../../assets/TeamPhoto/03. Tanvir Anwar Pony.jpg";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const AboutTeam = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Managing Director Section */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between my-12">
        <motion.div
          className="w-full md:w-1/4 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={md}
            alt="Managing Director"
            title="Jashim Uddin Ahmed"
            className="w-full h-auto rounded-md shadow-lg border-[3px] border-primary"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-3/4 p-4 md:pl-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-2xl font-heading font-bold mb-4">
            {messages.managingDirector.title}
          </h2>
          <p className="text-md font-sans text-justify leading-relaxed">
            {messages.managingDirector.content}
          </p>
        </motion.div>
      </section>

      {/* CEO Section */}
      <section className="flex flex-col md:flex-row-reverse md:items-center md:justify-between my-12">
        <motion.div
          className="w-full md:w-1/4 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={ceo}
            alt="CEO"
            title="Md. Jahangir Alam"
            className="w-full rounded-md shadow-lg h-auto border-[3px] border-primary"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-3/4 p-4 md:pr-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-2xl font-bold font-heading mb-4">{messages.ceo.title}</h2>
          <p className="text-md font-sans text-justify leading-relaxed">
            {messages.ceo.content}
          </p>
        </motion.div>
      </section>

      {/* Training Development Manager Section */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between my-12">
        <motion.div
          className="w-full md:w-1/4 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={manager}
            alt="Training Development Manager"
            title="Tanvir Anwar Pony"
            className="w-full rounded-md shadow-lg h-auto border-[3px] border-primary"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-3/4 p-4 md:pl-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-2xl font-bold font-heading mb-4">
            {messages.trainingDevelopmentManager.title}
          </h2>
          <p className="text-md font-sans text-justify leading-relaxed">
            {messages.trainingDevelopmentManager.content}
          </p>
        </motion.div>
      </section>

      {/* Management Team */}
      <section className="my-12">
        <h2 className="text-2xl font-heading font-bold mb-8 text-center">Management Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.management.map((member) => (
            <motion.div
              key={member.name}
              className="bg-slate-200 border border-blue-300 text-white shadow-lg rounded-md p-6 text-center transition transform hover:scale-105 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={member.photo}
                alt={member.name}
                title={member.name}
                className="w-24 h-24 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="mt-4 text-lg text-gray-800 font-heading">{member.name}</h3>
              <p className="text-sm font-sans text-primary">{member.position}</p>
              
            </motion.div>
          ))}
        </div>
      </section>

      {/* Faculty Members */}
      <section className="my-12">
        <h2 className="text-2xl font-heading font-bold mb-8 text-center">Faculty Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.faculty.map((member) => (
            <motion.div
              key={member.name}
              className="bg-slate-200 border border-blue-300 text-white shadow-lg rounded-md p-6 text-center transition transform hover:scale-105 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={member.photo}
                alt={member.name}
                title={member.name}
                className="w-24 h-24 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="mt-4 text-lg text-gray-800 font-heading">{member.name}</h3>
              <p className="text-sm font-sans text-primary">{member.position}</p>
              
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
