import React from 'react'
import { Typography } from "@material-tailwind/react";
import ig from '../../assets/img/ig.png'
import wa from '../../assets/img/wa.png'
import yt from '../../assets/img/yt.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <>
      <hr className="w-full hidden md:block" />
      <footer className="w-full bg-red-400 p-6 mt-4">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center text-white md:justify-between bg-red-400">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link to={'/about'}>
              <Typography
                as="a"
                href="#"
                color="color-white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 color-white"
              >
                About Us
              </Typography>
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                <Typography
                  as="a"
                  href="#"
                  color="color-white"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 color-white"
                >
                  Contact Us
                </Typography>
              </Link>
            </li>

          </ul>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a href="https://www.instagram.com/agils.a.p" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="Instagram" className="w-5" />
            </a>
          </li>
          <li className="ml-4"> {/* Add margin between items */}
            <a href="https://wa.me/+6289665881651" target="_blank" rel="noopener noreferrer">
              <img src={wa} alt="WhatsApp" className="w-5" />
            </a>
          </li>
          <li className="ml-4"> {/* Add margin between items */}
            <a href="https://www.youtube.com/agilsatria" target="_blank" rel="noopener noreferrer">
              <img src={yt} alt="YouTube" className="w-5" />
            </a>
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