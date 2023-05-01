import Link from 'next/link'
import React from 'react'
import SocialGroup from './SocialGroup'

const TopNav = () => {
  return (
    <nav className='w-full  py-4 bg-darker shadow'>
      <div className='max-w-screen-xl container mx-auto flex flex-wrap items-center justify-between'>
        <nav>
          <ul className='flex items-center justify-between font-bold text-sm text-dirty  uppercase no-underline'>
            <li>
              <Link
                className='hover:text-gray-200 hover:underline px-4'
                href='/'
              >
                Logo
              </Link>
            </li>
            <li>
              <Link className='hover:underline px-4' href='/about'>
                About
              </Link>
            </li>
          </ul>
        </nav>

        <SocialGroup />
      </div>
    </nav>
  )
}

export default TopNav
