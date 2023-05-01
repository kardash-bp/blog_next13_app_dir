import Image from 'next/image'
import Link from 'next/link'
import React, { cache } from 'react'
const getPost = cache(async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`)
  const data = await res.json()
  return data
})
const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getPost(+id)
  return (
    <>
      <article className='flex flex-col shadow my-4'>
        <a href='#' className='hover:opacity-75'>
          <img
            src={`https://source.unsplash.com/collection/11466816/1000x500?sig=${id}`}
          />
        </a>
        <div className='bg-white flex flex-col justify-start p-6'>
          <p className='flex gap-4 items-center'>
            {post.tags.map((t: string, i: string) => (
              <a
                key={i}
                href='#'
                className='text-blue-700 text-sm font-bold pb-4'
              >
                #{t}
              </a>
            ))}
          </p>
          <h2 className='text-3xl font-bold hover:text-gray-700 pb-4'>
            {post.title}
          </h2>
          <p className='text-sm pb-8'>
            By{' '}
            <a href='#' className='font-semibold hover:text-gray-800'>
              Boban PP
            </a>
            , Published on April 25th, 2020
          </p>
          <p>{post.body}</p>
        </div>
      </article>

      <div
        className={`w-full flex ${
          parseFloat(id) !== 1 ? 'justify-between' : 'justify-end'
        } bg-offwhite`}
      >
        {parseFloat(id) > 1 && (
          <Link
            href={`http://localhost:3000/posts/${parseFloat(id) - 1}`}
            className='p-3 text-lg font-bold'
          >
            &#x2B9C; Previous
          </Link>
        )}

        <Link
          href={`http://localhost:3000/posts/${+id + 1}`}
          className='p-3 text-lg font-bold'
        >
          Next &#x2B9E;
        </Link>
      </div>

      <div className='w-full flex flex-col text-center md:text-left md:flex-row md:gap-4 shadow bg-white mt-10 mb-10 p-6'>
        <div className='w-full md:w-1/5 flex justify-center md:justify-start pb-4'>
          <Image
            src='https://source.unsplash.com/random/150x150/?man'
            className='rounded-full'
            width={150}
            height={150}
            alt='avatar'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center md:justify-start'>
          <p className='font-semibold text-2xl'>Boban PP</p>
          <p className='pt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel neque non libero suscipit suscipit eu eu urna.
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
