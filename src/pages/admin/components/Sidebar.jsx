import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faList, faHome, faUsers, faNewspaper, faDashboard, faLocation, faKitMedical, faHomeUser } from "@fortawesome/free-solid-svg-icons";
import useTokenRefresh from "../../../controllers/useToken";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  const [artikelSubMenu, setArtikelSubMenu] = useState(false);
  const [lokasiSubMenu, setLokasiSubMenu] = useState(false);
  const [goldarSubMenu, setGoldarlSubMenu] = useState(false);

  const { refreshToken } = useTokenRefresh()

  useEffect(() => {
    refreshToken();
  }, [])

  const toggleArtikelSubMenu = () => {
    setArtikelSubMenu(!artikelSubMenu);
  };
  const toggleLokasiSubMenu = () => {
    setLokasiSubMenu(!lokasiSubMenu);
  };
  const toggleGoldarSubMenu = () => {
    setGoldarlSubMenu(!goldarSubMenu);
  };


  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-red-500 dark:bg-gray-300 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
            </div>
          </li>
         
          <li>
            <Link
              to={'/'}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-200 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon icon={faHomeUser} className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Halaman User</span>
            </Link>
          </li>
          <li>
            <Link
              to={'/admin'}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-200 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
            </Link>
          </li>
           {/* Users */}
           <li>
            <Link
              to={'/usersall'}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Data Users</span>
            </Link>
          </li>
          {/* end Users */}
          {/* Landing Page */}
          <li>
            <Link
              to={'/landingpageadmin'}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <FontAwesomeIcon icon={faDashboard} className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Landing Page</span>
            </Link>
          </li>
          {/* end Landing Page */}
          <li>
            <a
              href="#"
              onClick={toggleArtikelSubMenu}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Artikel</span>
            </a>
            {artikelSubMenu && (
              <ul className="ml-6 mt-2 space-y-2">
                 <li>
                  <Link
                    to={'/allartikel'}
                    className="flex flex-row items-center h-8 text-white-600 hover:text-white-800"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FontAwesomeIcon icon={faList} className="w-5 h-5" />
                    </span>
                    <span className="ml-2 text-xs tracking-wide">All Artikel</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/addartikel'}
                    className="flex flex-row items-center h-8 text-white-600 hover:text-white-800"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                    </span>
                    <span className="ml-2 text-xs tracking-wide">Add Artikel</span>
                  </Link>
                </li>
               
              </ul>
            )}
          </li>
          {/* stories */}
          <li>
            <Link
              to={'/storiesdata'}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faNewspaper} className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Stories</span>
            </Link>
          </li>
          {/* end stories */}
          {/* pendonor */}
          <li>
            <Link
              to={'/pendonordata'}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Pendonor</span>
            </Link>
            
          </li>
          {/* endpendonor */}
          {/* Lokasi */}
          <li>
            <a
              href="#"
              onClick={toggleLokasiSubMenu}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-200 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faLocation} className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Lokasi</span>
            </a>
            {lokasiSubMenu && (
              <ul className="ml-6 mt-2 space-y-2">
                 <li>
                  <Link
                    to={'/lokasiall'}
                    className="flex flex-row items-center h-8 text-white-600 hover:text-white-800"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faList} className="w-5 h-5" />
                    </span>
                    <span className="ml-2 text-xs tracking-wide">All Lokasi</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/lokasiadd'}
                    className="flex flex-row items-center h-8 text-white-600 hover:text-white-800"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                    </span>
                    <span className="ml-2 text-xs tracking-wide">Add Lokasi</span>
                  </Link>
                </li>
               
              </ul>
            )}
          </li>
          {/* end lokasi */}
          {/* Goldar */}
          <li>
            <a
              href="#"
              onClick={toggleGoldarSubMenu}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-300 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-red-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
              <FontAwesomeIcon icon={faKitMedical} className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Golongan Darah</span>
            </a>
            {goldarSubMenu && (
              <ul className="ml-6 mt-2 space-y-2">
                 <li>
                  <Link
                    to={'/goldarall'}
                    className="flex flex-row items-center h-8 text-white-600 hover:text-white-800"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faList} className="w-5 h-5" />
                    </span>
                    <span className="ml-2 text-xs tracking-wide">All Golongan Darah</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/goldaradd'}
                    className="flex flex-row items-center h-8 text-white-600 hover:text-white-800"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                    </span>
                    <span className="ml-2 text-xs tracking-wide">Add Golongan Darah</span>
                  </Link>
                </li>
               
              </ul>
            )}
          </li>
          {/* end Goldar */}
        </ul>
      </div>
    </div>
  );
};

export default SidebarAdmin;
