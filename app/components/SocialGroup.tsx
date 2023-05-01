import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialGroup = () => {
  return (
    <div className='flex items-center text-lg no-underline text-white pr-6'>
      <Link className='' href='#'>
        <Image src='/fb.png' width={32} height={32} alt='facebook' />
      </Link>
      <Link className='pl-6' href='#'>
        <Image src='/ins.png' width={32} height={32} alt='instagram' />
      </Link>
      <Link className='pl-6' href='#'>
        <Image src='/tw.png' width={32} height={32} alt='twitter' />
      </Link>
      <Link className='pl-6' href='#'>
        <Image src='/gh.png' width={32} height={32} alt='github' />
      </Link>
    </div>
  )
}

export default SocialGroup
