'use client'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostsList from './components/PostsList'
import { useSearchStore } from './store/searchStore'
import { useCallback, useEffect } from 'react'
import { getPosts } from '@/lib/getPosts'

export default function Home() {
  const { setFilteredPosts } = useSearchStore.getState()
  let postsState = useSearchStore((store) => store.filteredPosts)
  const initPosts = async () => {
    const postsArr = await getPosts()
    setFilteredPosts('', postsArr)
  }
  const handleState = useCallback(async () => {
    if (!postsState.length) {
      postsState = await getPosts()
    }
  }, [postsState])
  useEffect(() => {
    initPosts()
  }, [])
  useEffect(() => {
    handleState()
  }, [postsState])
  console.log({ postsState })
  return (
    <>
      <Header />
      <div className='max-w-screen-xl container mx-auto flex flex-wrap py-6'>
        <PostsList posts={postsState} />
        <Sidebar />
      </div>
    </>
  )
}
