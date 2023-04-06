import React from 'react'

const About = () => {
  return (
    <div class="relative isolate overflow-hidden bg-white py-20">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h1 class="mt-2 text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who We Are</h1>
      <p class="mt-6 text-base lg:text-xl lg:leading-8 leading-6 text-gray-700">Based out of Charleston, NC, our mobile auto service and repair business began with a passion for helping drivers get back on the road quickly and safely. We understand that taking time out of your busy day to visit a repair shop can be a hassle, so we bring our services to you. Our team of experienced mechanics has the skills and equipment necessary to handle a wide range of auto repairs and maintenance services, all while providing the convenience of coming to your location. Our dedication to quality workmanship and customer satisfaction is what sets us apart, and we take pride in ensuring your vehicle is running at its best. Thank you for considering our mobile auto service for your vehicle's needs.</p>
    </div>
    <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
      <div class="relative lg:order-last lg:col-span-5">
        <figure class="border-l border-[#0a58d7] pl-8">
          <blockquote class="text-sm lg:text-xl font-semibold lg:leading-8 leading-6 tracking-tight text-gray-900">
            <p>"Working with this company has been an absolute pleasure! Their dedication to customer satisfaction and attention to detail is truly outstanding. I couldn't be happier with the results and would highly recommend them to anyone looking for top-quality service."</p>
          </blockquote>
          <figcaption class="mt-8 flex gap-x-4">
            <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"/>
            <div class="text-sm leading-6">
              <div class="font-semibold text-gray-900">Brenna Goyette</div>
              <div class="text-gray-600">@brenna</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="max-w-xl lg:text-base text-sm lg:leading-7 leading-6 text-gray-700 lg:col-span-7">
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-[#0a58d7]" viewBox="0 0 24 24" fill="#0a58d7" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 24 24)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0137 2.76683C11.379 1.89022 12.6208 1.89022 12.9861 2.76683L14.9102 7.38462C15.0654 7.75726 15.4295 8 15.8332 8H20.893C21.8234 8 22.2893 9.12483 21.6314 9.78268L17.5391 13.875C17.2823 14.1318 17.185 14.5076 17.2847 14.8568L18.9076 20.5369C19.1816 21.496 18.1122 22.2767 17.2822 21.7234L12.5546 18.5716C12.2187 18.3477 11.7811 18.3477 11.4452 18.5717L6.72544 21.7182C5.89284 22.2732 4.81988 21.49 5.09479 20.5279L6.71509 14.8568C6.81486 14.5076 6.71747 14.1318 6.46068 13.875L2.38859 9.8029C1.72328 9.13758 2.19448 8 3.13538 8H8.16658C8.57028 8 8.93438 7.75726 9.08965 7.38462L11.0137 2.76683Z" fill="#0a58d7"/>
</svg>
            <span><strong class="font-semibold text-gray-900">Quality Service.</strong> We provide top-notch service with attention to detail and customer satisfaction. Our experienced team is dedicated to meeting your needs and exceeding expectations.</span>
          </li>
          <li class="flex gap-x-3">
          <svg fill="#0a58d7" class="mt-1 h-5 w-5 flex-none text-[#0a58d7]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z"/></svg>
            <span><strong class="font-semibold text-gray-900">Scheduling Options.</strong>  We offer flexible scheduling to accommodate your busy lifestyle. Choose from a variety of appointment times, including weekends and evenings, to find a time that works best for you.</span>
          </li>
          <li class="flex gap-x-3">
          <svg fill="#000000" version="1.1" id="Layer_1"  
	 class="mt-1 h-6 w-6 flex-none text-[#0a58d7]" viewBox="0 0 256 252" enable-background="new 0 0 256 252">
<path d="M59.406,88.486L50.54,60.801h50.68L90.352,88.486H59.406z M20.567,146.773
	c0-21.393,11.841-39.869,29.63-49.078h50.737c17.789,9.209,29.973,27.685,29.973,49.078c0,30.316-24.711,55.027-55.027,55.027
	C45.22,201.801,20.567,177.09,20.567,146.773z M80.857,159.987c0,3.26-2.974,4.919-7.265,4.919c-4.976,0-9.553-1.659-12.87-3.318
	l-2.288,8.866c2.917,1.659,7.894,2.974,13.156,3.318v7.264h7.551v-7.894c8.923-1.316,13.843-7.265,13.843-14.186
	c0-6.921-3.661-11.154-12.87-14.472c-6.578-2.288-9.209-3.947-9.209-6.578c0-2.002,1.659-4.29,6.578-4.29
	c5.606,0,9.209,1.659,11.211,2.631l2.288-8.58c-2.631-1.316-5.949-2.288-11.211-2.631v-6.921h-7.551v7.207
	c-8.237,1.659-13.156,6.921-13.156,13.843c0,7.608,5.606,11.555,13.843,14.186C78.511,155.354,81.143,157.012,80.857,159.987z
	 M198.608,91.221c-1.756-1.828-1.698-4.734,0.13-6.491s4.734-1.698,6.491,0.13s1.698,4.734-0.13,6.491
	S200.364,93.049,198.608,91.221z M229.263,82.637c1.828-1.756,1.887-4.662,0.13-6.491s-4.662-1.887-6.491-0.13
	c-1.828,1.756-1.887,4.662-0.13,6.491S227.434,84.394,229.263,82.637z M171.883,56.775c1.828-1.756,1.887-4.662,0.13-6.491
	c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491S170.055,58.532,171.883,56.775z M239.094,60.108
	c1.828-1.756,1.887-4.662,0.13-6.491s-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491C234.36,61.806,237.266,61.864,239.094,60.108
	z M204.274,24.598c1.828-1.756,1.887-4.662,0.13-6.491c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491
	C199.54,26.296,202.445,26.354,204.274,24.598z M229.857,35.032c1.828-1.756,1.887-4.662,0.13-6.491
	c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491C225.123,36.73,228.029,36.788,229.857,35.032z M182.436,34.261
	c1.828-1.756,1.887-4.662,0.13-6.491c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491S180.607,36.017,182.436,34.261z
	 M190.179,61.832l-16.368,15.724l-1.58,6.822l6.88-1.305l16.368-15.724c4.637,2.618,10.782,2.02,15.012-2.044
	c5.15-4.947,5.309-12.88,0.362-18.03s-12.88-5.309-18.03-0.362C188.593,50.978,187.573,56.91,190.179,61.832z M253.968,54.72
	c0,21.672-13.201,40.348-31.968,48.417V119h-15.232v88.777c0,17.087-13.772,30.858-30.859,30.858h-26.12v11.181H2V215h148v13.484
	l26.675-0.05c11.476,0,20.657-9.181,20.657-20.657V119H182v-15.814c-18.828-8.041-32.083-26.75-32.083-48.466
	c0-29.073,23.463-52.536,52.536-52.536C231.271,2.184,254.989,25.646,253.968,54.72z M241.747,34.102
	c-11.375-21.68-38.232-30.052-59.912-18.677c-21.68,11.375-30.052,38.232-18.677,59.912c11.375,21.68,38.232,30.052,59.912,18.677
	C244.75,82.639,253.122,55.782,241.747,34.102z" fill='#0a58d7'/>
</svg>
            <span><strong class="font-semibold text-gray-900">Free Estimates.</strong> We believe in transparency and providing value to our customers. That's why we offer no-obligation, free estimates for your project. Our team will assess your requirements and provide an accurate quote, so you can make an informed decision.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default About