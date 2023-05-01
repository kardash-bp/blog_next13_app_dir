import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostsList from './components/PostsList'

const getPosts = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json()
    return data.slice(0, 5)
  } catch (err: any) {}
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <>
      <Header />
      <div className='max-w-screen-xl container mx-auto flex flex-wrap py-6'>
        <PostsList posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}
