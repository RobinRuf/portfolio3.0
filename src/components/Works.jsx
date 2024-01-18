import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  isPublic,
  source_code_link,
  isOnline,
  url,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0, duration: 0.75 }}
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary/25 backdrop-blur-lg border border-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="Project Image"
              className="w-full h-full object-cover rounded-2xl"
            />

          {isPublic && !isOnline && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
          {isOnline && !isPublic && (
            <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
              <div
                onClick={() => window.open(url, "_blank")}
                className="black-gradient w-20 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <p className="text-white text-[14px]">Website</p>
              </div>
            </div>
          )}
          {isPublic && isOnline && (
            <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
              <div
                onClick={() => window.open(url, "_blank")}
                className="black-gradient w-20 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <p className="text-white text-[14px]">Website</p>
              </div>

              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          type: "spring",
          duration: 1.25,
          delay: 0,
        }}
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ 
            x: 0,
            y: 0,
            opacity: 0
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            type: "spring",
            delay: 0,
            duration: 1.25,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below you will find some of my projects, which I have already done or
          on which I am currently still working. These I have created completely
          for myself and some of them were freelance projects that I created for
          people and companies. These are not all, you can find more on my <a target="_blank" href="https://github.com/RobinRuf" className="font-bold">GitHub</a>.{" "}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center lg:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
