import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      {/* Catalogue div for car inventory */}
      <div id="discover" className='mt-12 padding-x padding-y max-width'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car inventory</h1>
          <p>Explore our inventory</p>

          {/* filters div */}
          <div className='home__filter'>
          </div>
        </div>
      </div>
    </main>
  )
}
