import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const TypewriterText = ({ words }) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting;

    const timeout = setTimeout(() => {
      if (shouldDelete) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setSpeed(100);
        } else {
          setSpeed(30);
        }
      } else {
        if (displayText.length < currentWord.length) {
          setDisplayText((prev) => prev + currentWord[displayText.length]);
          setSpeed(50);
        } else {
          setSpeed(2000);
          setIsDeleting(true);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, wordIndex, isDeleting, speed, words]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3B82F6]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div className="max-w-4xl w-full">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#3B82F6]">Lucas Puga</span> Marketing manager.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am passionate about{' '}
            <span className="text-[#3B82F6]">
              <TypewriterText words={["Marketing", "Gaming", "Personal Development"]} />
            </span>
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
