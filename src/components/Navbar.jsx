import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);



  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={isSecondary ? 'list-none flex sm:hidden flex-col gap-4' : 'list-none hidden sm:flex flex-row gap-6'}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'} hover:text-white ${isSecondary ? 'text-[16px]' : 'text-[20px]'} font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`${isSecondary ? 'text-secondary' : 'text-white'} hover:text-white ${isSecondary ? 'text-[16px]' : 'text-[20px]'} font-medium cursor-pointer`}
      >
        <a
          href={`${import.meta.env.BASE_URL}/LucasPugaCV.pdf`}
          download="LucasPugaCV.pdf"
          type="application/pdf"
          className="text-inherit no-underline"
        >
          Resume
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-20 right-2 min-w-[140px] z-10 rounded-xl foggy-glass flex flex-col gap-4 ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
