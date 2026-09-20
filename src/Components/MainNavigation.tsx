
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Ham from '../assets/Images/Scale/icon-hamburger-menu.svg';
import logoImg from '../assets/Images/Scale/logo.svg';
import Button from './Button';
import { AnimatePresence, motion } from 'motion/react';

export default function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full relative border-b-grey-200 max-w-7xl mx-auto mb-3 px-4 py-2 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="w-50 lg:w-90 cursor-pointer hover:opacity-80 transition-opacity">
            <Link to='/' aria-label="Go to homepage">
              <img src={logoImg} alt='Recipe Finder logo' className='' />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `lg:text-xl text-md font-semibold transition-colors duration-200 relative group px-1 ` +
                (isActive
                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300'
                  : 'hover:text-orange-500')
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `lg:text-xl text-md font-semibold transition-colors duration-200 relative group px-1 ` +
                (isActive
                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300'
                  : 'hover:text-orange-500')
              }
            >
              About
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `lg:text-xl text-md font-semibold transition-colors duration-200 relative group px-1 ` +
                (isActive
                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300'
                  : 'hover:text-orange-500')
              }
            >
              Recipes
            </NavLink>
          </div>

          <div className="hidden md:flex items-center">
            <Button title='Browse Recipes' />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden bg-grey-100 p-1.5 rounded-[5px] border-none outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <img src={Ham} alt='' aria-hidden="true" className='w-6 h-6 sm:w-8 sm:h-8' />
          </button>

        </div>

        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              role="menu"
              aria-label="Mobile navigation menu"
              className="absolute z-10 left-0 right-0 md:hidden flex flex-col text-left bg-white pb-4 space-y-0.5 pt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block font-semibold py-2 px-2 rounded-md transition-colors duration-200 ` +
                  (isActive
                    ? 'text-orange-500'
                    : 'hover:text-orange-500')
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block font-semibold py-2 px-2 rounded-md transition-colors duration-200 ` +
                  (isActive
                    ? 'text-orange-500'
                    : 'hover:text-orange-500')
                }
              >
                About
              </NavLink>
              <NavLink
                to="/recipes"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block font-semibold py-2 px-2 rounded-md transition-colors duration-200 ` +
                  (isActive
                    ? 'text-orange-500'
                    : 'hover:text-orange-500')
                }
              >
                Recipes
              </NavLink>
              <button className="w-full bg-evergreen-900 text-white border-none outline-none hover:text-orange-500 px-4 py-2.5 rounded-md font-Nunito-400 font-medium text-md transition-colors duration-200 mt-4">
                Browse recipes
              </button>
            </motion.div>
          )}
        </AnimatePresence>

    </nav>
  );
}