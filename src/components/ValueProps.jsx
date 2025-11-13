import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { RiLeafFill } from "react-icons/ri";
import { PiFarm } from "react-icons/pi";
import { PiPackageBold } from "react-icons/pi";
import { green } from '@mui/material/colors';
import {motion} from 'framer-motion'


const ValueProps = () => {
  
  return (
    <section className="relative px-6 py-16 bg-green-50 dark:bg-black md:px-12">
      <div className="mx-auto text-center max-w-7xl">
        {/* Background color blob  */}
        <div className="absolute inset-0 z-10 overflow-hidden">
              <div className="absolute hidden w-40 h-40 bg-pink-400 rounded-full dark:block opacity-40 blur-3xl top-10 left-10 animate-pulse" />
              <div className="absolute hidden w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full dark:block opacity-40 blur-3xl top-1/2 left-1/2 animate-pulse" />
              <div className="absolute hidden w-32 h-32 bg-blue-500 rounded-full dark:block opacity-40 blur-2xl bottom-10 right-10 animate-pulse" />
        </div>
        <h2 className="mb-8 text-3xl font-bold text-green-800 dark:text-green-100 md:text-4xl">
          Why Choose SnapCart Green?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* USP 1 */}
          <div className="flex flex-col items-center text-center">
            <motion.div
             className='h-20'
             initial={{opacity: 0, scale: 0.5 }}
             whileInView={{opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TbTruckDelivery className='text-5xl text-green-700 transition-colors duration-300 dark:text-green-100' />
            </motion.div>
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-100">24‑Hour Delivery</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Farm‑fresh greens at your doorstep, fast and hassle-free.</p>
          </div>

          {/* USP 2 */}
          <div className="flex flex-col items-center text-center">
            <motion.div
             className='h-20'
             initial={{opacity: 0, scale: 0.5 }}
             whileInView={{opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
            >
              <RiLeafFill className='text-5xl text-green-700 transition-colors duration-300 dark:text-green-100' />
            </motion.div>
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">100% Organic</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">No pesticides, just clean and natural veggies.</p>
          </div>

          {/* USP 3 */}
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className='h-20'
              initial={{opacity: 0, scale: 0.5 }}
              whileInView={{opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PiFarm className='text-5xl text-green-700 transition-colors duration-300 dark:text-green-100' />
            </motion.div>
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">Locally Grown</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Sourced directly from trusted neighborhood farms.</p>
          </div>

          {/* USP 4 */}
          <div className="flex flex-col items-center text-center">
            <motion.div
             className='h-20'
             initial={{opacity: 0, scale: 0.5 }}
             whileInView={{opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PiPackageBold className='text-5xl text-green-700 transition-colors duration-300 dark:text-green-100' />
            </motion.div>
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">Eco-Friendly Packaging</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Zero plastic. Recyclable and reusable options.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
