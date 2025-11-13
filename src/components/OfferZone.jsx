import React from 'react'

const OfferZone = () => {
  return (
    <section className='py-8 md:px-8 bg-green-50 dark:bg-black'>
      <div className='h-40 p-2 overflow-hidden bg-green-100 border-2 border-green-500 border-dashed rounded-lg md:h-56'>
        <img 
          src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Offer Zone" 
          className='object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105'
        />
      </div>
    </section>
  )
}

export default OfferZone