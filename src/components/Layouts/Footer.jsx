import React from 'react'
import { Typography } from "@material-tailwind/react";
import ig from '../../assets/img/ig.png'
import wa from '../../assets/img/wa.png'
import yt from '../../assets/img/yt.png'

const Footer = () => {
  return (
    <>
      <hr className="w-full hidden md:block" />
      <footer className="w-full bg-red-400 p-6 mt-4">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center text-white md:justify-between bg-red-400">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>

          </ul>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <img src={ig} alt="logo-ct" className="w-5" />
            </li>
            <li>
              <img src={wa} alt="logo-ct" className="w-5" />
            </li>
            <li>
              <img src={yt} alt="logo-ct" className="w-5" />
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal text-white">
          &copy; IBDP 2023 All rights reserved
        </Typography>
      </footer>
    </>
  );
}

export default Footer