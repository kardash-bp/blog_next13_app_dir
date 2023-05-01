import { PostType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }: { post: PostType }) => {
  return (
    <article className='flex flex-col shadow my-4'>
      <div className='overflow-hidden'>
        <Image
          src={`https://source.unsplash.com/collection/11466816/1000x500?sig=${post.id}`}
          className='hover:scale-105 transition duration-300 '
          alt='unsplash post cover'
          width={1000}
          height={500}
        />
      </div>
      <div className='bg-offwhite flex flex-col justify-start p-6'>
        <p className='flex gap-2'>
          {post.tags.map((t, i) => (
            <Link key={i} href='#' className='text-dark text-sm font-bold pb-4'>
              #{t}
            </Link>
          ))}
        </p>
        <h2 className='text-3xl font-bold  pb-4'>{post.title}</h2>
        <p className='text-sm pb-3'>
          By{' '}
          <Link
            href='https://github.com/kardash-bp'
            className='font-semibold hover:text-greenish'
            target='_blank'
          >
            KardasBP
          </Link>
          , Published on April 25th, 2020
        </p>
        <p className='pb-6'>
          {post.body.split('. ').slice(0, 2).join('. ')}...
        </p>
        <Link
          href={`/posts/${post.id}`}
          className='w-48 border border-transparent rounded-md uppercase text-sm font-bold text-center hover:text-greenish hover:border-greenish'
        >
          Continue Reading &rarr;
        </Link>
      </div>
    </article>
  )
}

export default PostCard
