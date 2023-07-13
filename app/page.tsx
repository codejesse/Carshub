import { Hero, SearchBar, CustomFilter } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars();

  console.log(allCars)

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
            <SearchBar />

            <div className='home__filter-container'>
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
