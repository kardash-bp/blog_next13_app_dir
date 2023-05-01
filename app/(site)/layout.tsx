import Footer from '@/app/components/Footer'
import Sidebar from '@/app/components/Sidebar'
import { headers } from 'next/headers'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-screen-xl container mx-auto flex flex-wrap py-6'>
      <section className='w-full md:w-2/3 flex flex-col items-center px-3'>
        {children}
      </section>
      <Sidebar />
    </div>
  )
}
