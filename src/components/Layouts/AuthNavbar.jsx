import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logo from "../../assets/img/logo.png";
 
const AuthNavbar = () => {
  return (
    <Navbar className="mx-auto max-w-full px-4 lg:px-8 lg:py-4 bg-white">
      <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-gray-900"
        >
         <img src={logo} alt="IBDP" width={130}
									height={12} />
        </Typography>
       </div>
    </Navbar>
  );
}
export default AuthNavbar