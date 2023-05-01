import React from 'react'
import SocialGroup from './SocialGroup'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t pb-12'>
      <div className='w-full container mx-auto flex flex-col items-center'>
        <div className='flex flex-col md:flex-row text-center md:text-left md:justify-between py-6'>
          <Link href='#' className='uppercase px-3'>
            About Us
          </Link>
          <Link href='#' className='uppercase px-3'>
            Privacy Policy
          </Link>
          <Link href='#' className='uppercase px-3'>
            Terms & Conditions
          </Link>
          <Link href='#' className='uppercase px-3'>
            Contact Us
          </Link>
        </div>
        <SocialGroup />
        <div className='py-4'>&copy; bobanpp</div>
      </div>
    </footer>
  )
}

export default Footer
