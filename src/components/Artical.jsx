import React from 'react'
import Arrow from "../Images/arrow.png"
import { Link } from "react-router-dom";
export default function Artical() {
  return (
    <div>
    <section className=" w-[100%] py-8 md:px-8 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-2">
          <div className="">
            <div className=" mb-2">
              <h2 className="text-3xl font-bold mb-2">
                Vishwambhar the absolute truth
              </h2>
              <p className="text-gray-600">
                Complete guidance to shape humanity to build up a sustainable
                world civilization of Truth-Love-Harmony-Peace-Happiness
              </p>
            </div>
            <p className="text-gray-500">
              We are providing a guideline and ecosystem to shape the world
              civilization based on Absolute Truth and under that authority
              develop a sustainable world Civilization of
              Truth-Love-Harmony-Peace-Happiness.
            </p>
            <p className="text-gray-500">
              This is an ecosystem in line with the desire and purpose of God to
              make His project creation successful. It is not a new invention
              but a discovery abstracted from the self-evident vast realm of
              Vedic Knowledge and science...
              <span>
                <Link to="#" className="underline hover:text-gray-700">
                  Read More
                </Link>
              </span>
            </p>
          </div>
          <img
            src="https://picsum.photos/500/300"
            alt="Vishwambhar"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <div className="flex w-full items-center justify-center md:justify-start md:py-4 py-6">
          <span className="font-bold text-lg">Our Articals</span>
          <button className=" bg-violet-800 rounded-full text-sm text-white h-11 font-bold px-10 ml-4 flex items-center gap-4">
            READ MORE
            <span >
            <img width="30" height="25" src={Arrow} alt="long-arrow-right"/>
            </span>
          </button>
        </div>
      </section>
    </div>
  )
}
