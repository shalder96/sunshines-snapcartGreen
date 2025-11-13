import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { RiAccountCircleLine } from "react-icons/ri";
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart(); // comment this out if not using CartContext
  const [accountOpen, setAccountOpen] = useState(false);
  const menu = [
    { name: 'Home', path: '/' },
    { name: 'Plants', path: '/plants' },
    { name: 'Vegetables', path: '/vegetables' },
    { name: 'Fruits', path: '/fruits' },
    { name: 'Blog', path: '/blog' },
    // { name: 'Login', path: '/AuthPage' },
  ];

  return (
    <header className="fixed z-50 w-full text-black bg-green-900 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-100">
          SnapCartGreen
        </Link>

        {/* Desktop Nav */}
        <nav className="items-center hidden space-x-6 md:flex">
          {menu.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path} 
              className={({isActive}) => `transition hover:text-green-600 ${isActive ? "text-green-600" : "text-green-100"}`}
              >
              {item.name}
            </NavLink>
          ))}


          {/* Account  */}
          <div className="relative group">
            <RiAccountCircleLine size={22} className='text-green-100 cursor-pointer hover:text-green-600' />
            {/* Dropdown menu  */}
            <div className='absolute right-0 hidden pt-3 group-hover:block'>
              <div className='flex flex-col w-40 gap-2 px-4 py-3 text-green-100 bg-green-900 rounded-lg shadow-lg'>
                <button className='px-2 py-1 text-left rounded-md hover:text-green-600'>Profile</button>
                <button className='px-2 py-1 text-left rounded-md hover:text-green-600'>Orders</button>
                <button className='px-2 py-1 text-left rounded-md hover:text-green-600'>Logout</button>
              </div>
            </div>
          </div>

          {/* Cart */}
          <NavLink 
            to="/cart" 
            className={({isActive}) => `relative inline-flex items-center transition-colors duration-200 hover:text-green-600 ${isActive ? "text-green-600" : "text-green-100"}`}
          >
            <FiShoppingCart size={22} />
            
            {cartItems?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-green-100 text-xs px-1.5 py-0.5 rounded-full font-semibold leading-none">
                {cartItems.length} || 0
              </span>
            )}
          </NavLink>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center px-6 py-8 overflow-y-auto font-semibold text-black bg-green-100 shadow-md dark:bg-gray-900 dark:text-green-100 md:hidden backdrop-blur-lg"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute text-3xl text-gray-600 top-5 right-6 hover:text-green-600"
            >
              <FiX size={26} />
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center w-full mt-16 space-y-6 text-center sm:space-y-8">
              {menu.map((item) => (
                <li
                  key={item.name}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl transition cursor-pointer md:text-2xl"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `hover:text-green-600 ${
                        isActive ? "text-green-600" : "text-gray-600 dark:text-green-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Bottom Section (Account + Cart) */}
            <div className="flex flex-col items-center justify-center w-full gap-6 mt-8 mb-4 sm:flex-row sm:gap-10">
              
              {/* Account */}
              <div className="relative">
                <button
                  onClick={() => setAccountOpen((prev) => !prev)}
                  className='flex items-center justify-center'
                >
                  <RiAccountCircleLine
                    size={26}
                    className="text-gray-600 cursor-pointer hover:text-green-700 dark:text-green-100"
                  />
                </button>
                {/* Dropdown */}
                <AnimatePresence>
                  {accountOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 flex flex-col w-40 gap-2 px-4 py-3 mt-2 text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-green-100"
                    >
                      <button className="px-2 py-1 text-left rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                        Profile
                      </button>
                      <button className="px-2 py-1 text-left rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                        Orders
                      </button>
                      <button className="px-2 py-1 text-left text-red-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cart */}
              <NavLink
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `relative inline-flex items-center transition-colors duration-200 hover:text-green-600 ${isActive ? "text-green-600" : "dark:text-green-100 text-gray-600"}`
                }
              >
                <FiShoppingCart size={24} />
                <span className="text-base sm:text-lg">Cart</span>
                {cartItems?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-green-100 text-xs px-1.5 py-0.5 rounded-full font-semibold leading-none">
                    {cartItems.length}
                  </span>
                )}
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </header>
  );
};

export default Navbar;
