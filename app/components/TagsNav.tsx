import React from 'react'

const TagsNav = () => {
  return (
    <nav className='relative mt-8 sm:mt-0 sm:absolute w-full bottom-0 py-2 text-offwhite'>
      <div className='block sm:hidden'>
        <a
          href='#'
          className='md:hidden text-base font-bold uppercase text-center flex justify-center items-center'
        >
          Categories <i className='fa-chevron-up fas ml-2'></i>
        </a>
      </div>
      <div className='hidden w-full flex-grow sm:flex sm:items-center sm:w-auto'>
        <div className='w-full container mx-auto flex flex-col sm:flex-row items-center justify-start md:justify-center gap-2 text-sm font-bold uppercase'>
          <a href='#' className='hover:bg-[#e8395e] rounded p-2 '>
            NextJS
          </a>
          <a href='#' className='hover:bg-[#fb6b08] rounded p-2 '>
            MERN
          </a>
          <a href='#' className='hover:bg-yellow rounded p-2 '>
            Tailwind
          </a>
          <a href='#' className='hover:bg-greenish rounded p-2 '>
            graphql
          </a>
          <a href='#' className='hover:bg-[#5db9d1] rounded p-2 '>
            Typescript
          </a>
          <a href='#' className='hover:bg-[#133750] rounded p-2 '>
            Redux
          </a>
        </div>
      </div>
    </nav>
  )
}

export default TagsNav
