import { Hero, SearchBar, CustomFilter, CarCard } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

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

          {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
