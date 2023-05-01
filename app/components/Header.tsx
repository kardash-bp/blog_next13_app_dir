import React from 'react'
import TagsNav from './TagsNav'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='relative bg-[url(https://images.unsplash.com/photo-1667144383665-a799f22901e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80)] bg-cover bg-center bg-no-repeat text-offwhite'>
      <div className='absolute inset-0 bg-darker/75 sm:bg-transparent  sm:from-darker/95 sm:to-dark/25 sm:bg-gradient-to-r'></div>
      {/* <div classNameName='flex flex-col items-center py-12'>
        <h1 classNameName='font-bold  uppercase text-5xl'>Blog Name</h1>
        <p classNameName='text-xl'>Trying out the app directory in Next.js </p>
      </div> */}
      <div className='relative mx-auto max-w-screen-xl px-6 py-24 sm:px-8 lg:flex  lg:items-center lg:px-10'>
        <div className='max-w-xl text-center sm:text-left sm: ml-8'>
          <h1 className='text-3xl font-bold sm:text-5xl'>
            Try{' '}
            <strong className='block font-extrabold  text-yellow'>
              Next.js 13{' '}
            </strong>{' '}
            new App directory
          </h1>

          <p className='mt-4 max-w-lg sm:text-xl/relaxed'>
            Exploring the new Next.js app directory and server components,
            tailwind, typescript.
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <Link
              href='#'
              className='block w-full rounded bg-greenish hover:bg-yellow  px-12 py-3 text-sm font-semibold text-darker shadow  focus:outline-none active:outline-none active:text-bold sm:w-auto transition duration-200'
            >
              Learn More
            </Link>
          </div>
          <TagsNav />
        </div>
      </div>
    </header>
  )
}

export default Header
