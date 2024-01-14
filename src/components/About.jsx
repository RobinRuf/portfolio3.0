import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { mainstack } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const MainstackCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full backdrop-blur-lg border border-tertiary p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary/20 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="mainstack"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am currently a computer science student in Basel, Switzerland. Before
        that I have been teaching myself programming for 10 years. Most of my experience is in web and mobile development with
        TS and JS using ReactJS, NextJS or React Native.
        <br /><br /> I'm a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. <br /><br />
        You can see my current mainstack below. To see my full techstack, please visit my <a target="_blank" href="https://github.com/RobinRuf" className="font-bold">GitHub</a>.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {mainstack.map((mainstack, index) => (
          <MainstackCard key={mainstack.title} index={index} {...mainstack} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
