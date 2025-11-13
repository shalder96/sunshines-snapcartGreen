import React from 'react'



const Newsletter = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <section className="px-1.5 md:px-6 py-12 text-center shadow-md bg-green-50 dark:bg-black ">
      <h2 className="mb-2 text-2xl font-bold text-green-900 dark:text-green-200 md:text-3xl">
        Get Fresh Offers & Farm Recipes Every Week!
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-200">
        Sign up for our newsletter and enjoy exclusive seasonal deals, recipes & farm updates. No spam, ever.
      </p>
      <div className="flex flex-col items-center max-w-md gap-2 mx-auto md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 text-black bg-white border border-green-300 rounded-md dark:bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button 
          type='submit'
          onClick={() => {handleSubmit}}
          className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
          Subscribe
        </button>
      </div>
     
    </section>

)

}

export default Newsletter