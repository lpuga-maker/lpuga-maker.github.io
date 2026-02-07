import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full white-border p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* Clickable Icon */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <img 
            src={icon} 
            alt={`${title} icon`} 
            className="w-full h-full object-contain" 
            loading="lazy" 
          />
        </a>

        <h3 className="text-white text-[20px] font-bold text-center mt-4 break-words">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] break-words"
      >
        Email: <a href="mailto:lpuga2012@gmail.com" className="text-white underline break-all">lpuga2012@gmail.com</a>
        <br />
        LinkedIn: <a href="https://www.linkedin.com/in/lucaspugamateo/" className="text-white underline break-all">linkedin.com/in/lpuga/</a>
        <br />
        Location: <a href="https://maps.app.goo.gl/hXgfzysp5Dbk2eut5" className="text-white underline break-all">Madrid (28016), Spain</a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {technologies.map((technology, index) => (
          <ServiceCard 
            key={technology.name} 
            index={index} 
            title={technology.name}
            icon={technology.icon}
            link={technology.link}  // Pass the link!
          />
        ))}
      </div>
    </>
  );
};

const WrappedContact = SectionWrapper(Contact, 'contact');

export default WrappedContact;
