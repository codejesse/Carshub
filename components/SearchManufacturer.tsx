'use client'
import { SearchManufacturerProps } from '@/types';
import { useState, Fragment } from 'react'
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState("");

    const filteredManufacturers = query === "" ?
        manufacturers : manufacturers.filter((item) => (
            item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLocaleLowerCase().replace(/\s+/g, "")
                )))

    return (
        <div className="search-manufacturer">
            <Combobox>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car-logo'
                        />
                    </Combobox.Button>

                    {/* Input field for searching */}
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder="Select Make"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {/* Transition for displaying the options */}
                    <Transition
                        as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")} // Reset the search query after the transition completes
                    >
                        <Combobox.Options>
                            {filteredManufacturers.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredManufacturers.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        value={item}
                                        className={({ active }) => `relative search-manufacturer__option ${active ? `bg-primary-blue text-white` : `text-gray-900`}`}
                                    >
                                        {item}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer;