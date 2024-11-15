import React from 'react';

import ImageBanner from './ImageBanner'; // Adjust the path if needed
import banner_A from '../assets/banner_A.jpeg'
import banner_B from '../assets/banner_B.jpeg'
import banner_C from '../assets/banner_C.jpeg'
import logo from '../assets/logo.png'

export default function PortfolioLayout() {
    return (
        <div className="grid lg:grid-cols-4 lg:w-[1288px] h-screen">
            <div className="p-[30px] lg:pr-[30px] pr-[60px] bg-white col-span-1 lg:overflow-y-auto lg:items-start  lg:w-[350px] w-screen  lg:h-screen flex flex-col  justify-between h-[90vh]">
                <div className='space-y-[15px]'>
                    <h2 className="text-[24px] font-bold">"Make things easy for the people,..."</h2>
                    <p className="mt-4 font-light text-[16px] text-[#666666]">
                        At Basira Studio, we believe in the power of thoughtful design to transform everyday experiences. Our vision is to create intuitive, uplifting, and inclusive solutions that make life simpler and more joyful.
                    </p>
                </div>
                <div class="bg-white   w-full">
                    <h4 className='text-[#666666] font-extralight'>#buildingInPublic</h4>
                    <h2 class="text-[16px] font-bold text-[#2D3A8C] mb-4">
                        We’re Still Building<br />—Join the Process!
                    </h2>
                    <p class="text-[#666666] font-light mb-6 text-[16px]">
                        Sign up to be part of our journey.<br /> Get updates, behind-the-scenes peeks, and early access to our launch. Let’s create something amazing together.
                    </p>
                    <form class="space-y-[15px]">
                        {/* <div>
                            <input
                                type="email"
                                placeholder="Enter your Name"
                                class="w-full px-4 py-2 border-t border-gray-100 border-b border-b-black focus:outline-none focus:bg-gray-100 placeholder-gray-500"
                            />
                        </div> */}
                        <div className='flex justify-between'>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                class="w-auto h-auto px-4 py-2 border-t border-gray-100 border-b border-b-black focus:outline-none focus:bg-gray-100 placeholder-gray-500"
                            />
                            <button
                                type="button"
                                class="w-[55px] h-[55px] text-white bg-[#0033A0] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center  items-center ">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </button>
                        </div>


                    </form>
                </div>

                {/* <nav className="mt-8 space-y-[10px] text-sm">
          <a href="#philosophy" className="block font-medium">Philosophy</a>
          <div className='width-[290px]'></div>
          <a href="#insights" className="block font-medium">Insights</a>
          <div className='width-[290px]'></div>
          <a href="#connect" className="block font-medium">Connect</a>
        </nav> */}
                <div className="mt-8">
                    <img src={logo} alt="Basira Studio Logo" className="w-[204px] h-auto" />
                </div>
            </div>
            <div className="lg:overflow-y-auto no-scrollbar flex flex-col items-center col-span-3  p-[30px]">
                <div className="space-y-[40px]">
                    <div className="relative">
                        <ImageBanner src={banner_A} />
                        <div className="flex justify-between mt-2">
                            <p className="font-semibold  text-[16px]">Iwan</p>
                            <a href="#view" className=" font-medium text-[#666666] text-[16px]">View →</a>
                        </div>
                    </div>
                    <div className="relative">
                        <ImageBanner src={banner_B} />
                        <div className="flex justify-between mt-2">
                            <p className="font-semibold text-[16px]">Sustenance</p>
                            <a href="#view" className=" font-medium text-[#666666] text-[16px]">View →</a>
                        </div>
                    </div>
                    <div className="relative">
                        <ImageBanner src={banner_C} />
                        <div className="flex justify-between mt-2">
                            <p className="font-semibold text-[16px]">ETS Contracts</p>
                            <a href="#view" className="font-medium text-[#666666] text-[16px]">View →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
