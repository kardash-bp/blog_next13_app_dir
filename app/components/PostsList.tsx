import { PostType } from '@/types'
import React from 'react'
import PostCard from './PostCard'

const PostsList = ({ posts }: { posts: PostType[] }) => {
  return (
    <section className='w-full md:w-2/3 flex flex-col items-center px-3'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  )
}

export default PostsList
