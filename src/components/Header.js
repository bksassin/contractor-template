import React from 'react'
import header1 from '../assets/header1.jpg';
import header2 from '../assets/header2.jpg';
import header3 from '../assets/header3.jpg';
import header4 from '../assets/header4.jpg';
import header5 from '../assets/header5.jpg';

const Header = () => {
  return (
    <div class="bg-white">
  <main>
    <div class="relative isolate">
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-2xl lg:text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">COMPANY NAME</h1>
              <p class="relative mt-6 text-base lg:text-lg leading-6 lg:leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Efficient and reliable auto repairs at your doorstep - Mobile auto repair services for your convenience.</p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="#" class="rounded-md bg-[#0a58d7] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a58d7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a58d7]">Estimate</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-700 hover:text-[#0a58d7]">About Us <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative">
                  <img src={header1} alt="" class="hidden lg:block aspect-[2/3] w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"/>
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-700/10"></div>
                </div>
              </div>
              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img src={header2} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"/>
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-700/10"></div>
                </div>
                <div class="relative">
                  <img src={header3} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"/>
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-700/10"></div>
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <img src={header4} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"/>
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-700/10"></div>
                </div>
                <div class="relative">
                  <img src={header5} alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"/>
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-700/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

  )
}

export default Header