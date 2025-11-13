import React from 'react'
import useProduct from '../contexts/ProductContext.js'

const Blog = () => {
  const {productName}= useProduct()
  return (
    
    <section className='h-screen pt-16 text-black dark:text-white bg-green-50 dark:bg-black'>
        Blog
        {productName}
    </section>
  )
}

export default Blog