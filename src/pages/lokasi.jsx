import {
    CalendarIcon
  } from "@heroicons/react/24/outline"
import Layout from '../components/Layouts/Layout'
import lokasi1 from '../assets/img/lokasi.svg'
import { LokasiAllData } from "../controllers/LokasiData"

const PageLocation = () => {

  const {
      datatabel
  } = LokasiAllData()

  return (
    <Layout>
      <div className="mt-10 md:mt-20 bg-red-200 m-4 md:my-10 md:mx-10 rounded-2xl p-4 md:p-10">
        <div className="container mx-auto grid grid-cols-12 gap-4 md:gap-10 w-full">
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center">
            <img src={lokasi1} alt="donor" className="w-full" />
          </div>
          <div className="col-span-12 md:col-span-8 md:p-4 p-2 justify-center w-full h-full align-middle">
            <h1 className="text-justify text-black text-3xl font-bold mt-2 md:mt-5">Jadwal dan Lokasi Donor Darah</h1>
            <p className="text-justify text-black text-lg mt-2 md:mt-5">
              Selamat datang di halaman jadwal dan lokasi donor darah IBDP, di mana kesempatan untuk memberikan kehidupan ada di ujung jarimu. IBDP memahami bahwa waktu berharga, dan itulah mengapa IBDP menyediakan informasi lengkap tentang jadwal donor darah beserta dengan lokasinya agar Anda dapat berpartisipasi dengan mudah.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-10 w-max py-20">
        {datatabel.map((location, index) => (
          <div key={index} className="col-span-12 border border-solid border-gray-300 rounded-2xl p-10">
            <div className="flex gap-5">
              <div className="flex flex-col justify-start">
                <div className="h-48 w-48 rounded-lg border border-gray-300 border-solid flex flex-col justify-center items-center gap-2">
                  <img src={location.image} className="object-cover rounded-lg" style={{ height: "400px"}} alt={`lokasi${index + 1}`} />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl">{location.nama}</h3>
                <p className="text-lg font-normal">{location.tempat}</p>
                <p>
                  <CalendarIcon className="h-5 w-5 text-gray-500 inline-block mr-1" />
                  {location.tanggalwaktubuka} {location.waktubuka} - {location.waktututup}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default PageLocation