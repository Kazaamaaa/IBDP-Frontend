import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  SquaresPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import logo from "../../assets/img/logo.png";
import CustomButton from "../Elements/Button/CostumButton";
import CustomDialog from "../Fragments/CustomDialog";
import useTokenRefresh from "../../controllers/useToken";
import FunctionLogout from "../../controllers/Logout";
import axios from "axios";

const navListMenuItems = [
  {
    title: "Lokasi Dan Jadwal",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    link: 'lokasidanjadwal',
  },
  {
    title: "Stok Darah",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    link: 'stokdarah',
  },
  {
    title: "Syarat-Syarat",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link: 'syarat',
  },
];

const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ icon, title, description, link }, key) => (
    <a href={link || '#'} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <a href={'informasi'}>Informasi</a>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
};

function NavList() {
  const { data,  refreshToken } = useTokenRefresh()

  useEffect(() => {
    refreshToken()
  }, [])

 
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-black">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium px-10 justify-start"
      >
        {data.userId ? (
            <Link to={'/formdonor'}>
            <CustomButton variant="outlined" title="Ayo Donor" size="sm" />
            </Link>
          ) : (
            <CustomDialog title="Ayo Donor" variant="outlined" />
          )}
        
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={'/'}>
          <ListItem className="flex items-center gap-2 py-2 pr-4">Beranda</ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={'/about'}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 ">
            Tentang Kami
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

const NavbarDefault = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [openProfile2, setOpenProfile2] = useState(false)
  const [image, setImagePreview] = useState('')
  const { data,  refreshToken } = useTokenRefresh()
  const { Logout } = FunctionLogout()
  const navigate = useNavigate()

  useEffect(() => {
    refreshToken();
    getId();
  }, [])

  const Gotoadmin =() =>{
    navigate('/admin')
  }

  const getId = async() => {
    const response = await axios.get(`http://localhost:3000/me/${data.userId}`)
    setImagePreview(response.data.url)
  }


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenProfile(false),
    );
  }, []);

  return (
    <Navbar className="max-w-full px-4 py-2">
      <div className="flex items-center justify-between text-black">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img src={logo} alt="IBDP" width={130} height={12} />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">

        {data.userId ? (
            <div className="flex items-center gap-2">
            <Link to="/profil">
              <Avatar
                src={image}
                size="small"
              />
            </Link>
            <Menu
              open={openProfile}
              handler={setOpenProfile}
              offset={{ mainAxis: 20 }}
              placement="bottom"
            >
              <MenuHandler>
                <Typography as="div" variant="small" className="font-medium">
                  <ListItem
                    className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                    selected={openProfile}
                  >
                    <span>{data.username}</span>
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`block h-3 w-3 transition-transform ${
                        openProfile ? "rotate-180" : ""
                      }`}
                    />
                  </ListItem>
                </Typography>
              </MenuHandler>
              <MenuList>
                {data.role === 'admin' ? (
                  <><MenuItem onClick={Gotoadmin}>Dashboard Admin</MenuItem><MenuItem onClick={Logout}>Logout</MenuItem></>
                  ) : (
                  <MenuItem onClick={Logout}>Logout</MenuItem>
                )}
              </MenuList>
            </Menu>
          </div>
          ) : (
            <CustomDialog title="Login" variant="filled" />
          )}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
        {data.userId ? (
            <div className="flex items-center gap-2">
            <Link to="/profil">
              <Avatar
                src={image}
                size="small"
              />
            </Link>
            <Menu
              open={openProfile2}
              handler={setOpenProfile2}
              offset={{ mainAxis: 20 }}
              placement="bottom"
            >
              <MenuHandler>
                <Typography as="div" variant="small" className="font-medium">
                  <ListItem
                    className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                    selected={openProfile2}
                  >
                    <span>{data.username}</span>
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`block h-3 w-3 transition-transform ${
                        openProfile2 ? "rotate-180" : ""
                      }`}
                    />
                  </ListItem>
                </Typography>
              </MenuHandler>
              <MenuList>
                {data.role === 'admin' ? (
                  <><MenuItem onClick={Gotoadmin}>Dashboard Admin</MenuItem><MenuItem onClick={Logout}>Logout</MenuItem></>
                  ) : (
                  <MenuItem onClick={Logout}>Logout</MenuItem>
                )}
              </MenuList>
            </Menu>
          </div>
          ) : (
            <CustomDialog title="Login" variant="filled" />
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarDefault;
