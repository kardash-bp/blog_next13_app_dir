import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='w-full md:w-1/3 flex flex-col items-center px-3'>
      <div className='w-full bg-white shadow flex flex-col my-4 p-6'>
        <p className='text-xl font-semibold pb-5'>About Me</p>
        <p className='pb-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
          hac habitasse platea dictumst.
        </p>
        <a
          href='/about'
          className='w-full bg-greenish text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4'
        >
          Get to know me
        </a>
      </div>
      <div className='w-full bg-offwhite shadow flex flex-col my-4 p-6'>
        <p className='text-xl font-semibold pb-5'>Instagram</p>
        <div className='grid grid-cols-3 gap-3'>
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?city'
          />
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?street'
          />
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?nature'
          />
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?develop'
          />
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?people'
          />
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?vilage'
          />
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?architecture'
          />
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?world'
          />
          <Image
            width={150}
            height={150}
            alt='instagram thumbnail'
            className='hover:opacity-75'
            src='https://source.unsplash.com/random/150x150/?new'
          />
        </div>
        <a
          href='#'
          className='w-full bg-greenish text-white font-bold text-sm uppercase rounded hover:text-dark flex items-center justify-center px-2 py-3 mt-6'
        >
          <Image
            src='/ins.png'
            alt='instagram'
            width={28}
            height={28}
            className='mr-3'
          />{' '}
          Follow @bobanpp
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
