'use client'
import { useEffect, useState } from 'react'
import { useSearchStore } from '../store/searchStore'
import { getPosts } from '@/lib/getPosts'

const SearchField = () => {
  const { searchTerm, setSearchTerm, setFilteredPosts } = useSearchStore(
    (state) => ({
      searchTerm: state.searchTerm,
      setSearchTerm: state.setSearchTerm,
      setFilteredPosts: state.setFilteredPosts,
    })
  )

  const handleSearch = async () => {
    const postsArr = await getPosts()
    setFilteredPosts(searchTerm, postsArr)
    setSearchTerm('')
    setSearchTerm('')
  }
  useEffect(() => {
    if (searchTerm !== '') {
      setSearchTerm(searchTerm)
    }
  }, [searchTerm])

  console.log(useSearchStore.getState())

  return (
    <div className='mr-5'>
      <label className='flex text-offwhite border border-solid border-dirty p-2 rounded-md'>
        <input
          type='search'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </label>
    </div>
  )
}

export default SearchField
