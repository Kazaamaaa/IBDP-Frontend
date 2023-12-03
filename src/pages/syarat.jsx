import React from 'react'
import {
    CalendarIcon
  } from "@heroicons/react/24/outline"
import CardStory from '../components/Fragments/CardStory'
import Layout from '../components/Layouts/Layout'
import syarat from '../assets/img/syarat.svg'

const PageSyarat = () => {
  return (
    <Layout>
      <div className="mt-10 md:mt-20 bg-red-200 m-4 md:my-10 md:mx-10 rounded-2xl p-4 md:p-10">
        <div className="container mx-auto grid grid-cols-12 gap-4 md:gap-10 w-full">
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center">
            <img src={syarat} alt="donor" className="w-full" />
          </div>
          <div className="col-span-12 md:col-span-8 md:p-4 p-2 justify-center w-full h-full align-middle">
            <h1 className="text-justify text-black text-3xl font-bold mt-2 md:mt-5">Syarat-Syarat Donor Darah</h1>
            <p className="text-justify text-black text-lg mt-2 md:mt-5">
            Selamat datang di halaman jadwal dan lokasi donor darah IBDP, di mana kesempatan untuk memberikan kehidupan ada di ujung jarimu. IBDP memahami bahwa waktu berharga, dan itulah mengapa IBDP menyediakan informasi lengkap tentang jadwal donor darah beserta dengan lokasinya agar Anda dapat berpartisipasi dengan mudah.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-10 w-max py-20">
        <div className="col-span-12 border border-solid border-gray-300 rounded-2xl p-10">
            <div className="flex gap-52">
                <div className="flex flex-col justify-start gap-3">
                <h3 className="font-bold text-xl">
                        Untuk menjadi pendonor darah, ada beberapa syarat yang harus dipenuhi, mulai dari usia hingga kondisi tubuh saat akan mendonorkan darah. Berikut ini adalah beberapa persyaratan dasar untuk melakukan donor darah:
                    </h3>
                    <ul className="list-disc pl-6">
                        <li className="text-lg font-normal">Berusia 17–60 tahun untuk orang yang baru pertama kali mendonorkan darah</li>
                        <li className="text-lg font-normal">Pendonor pertama kali yang berusia lebih dari 60 tahun dan pendonor ulang yang berusia lebih dari 65 tahun dapat mendonorkan darah, tetapi mendapatkan perhatian khusus berdasarkan kondisi kesehatannya</li>
                        <li className="text-lg font-normal">Memiliki berat badan minimal 45 kg</li>
                        <li className="text-lg font-normal">Memiliki tekanan darah normal atau berkisar antara 90/60–150/80 mmHg</li>
                        <li className="text-lg font-normal">Memiliki kadar Hemoglobin sekitar 12,5–17 g/dL dan tidak lebih dari 20 g/dL</li>
                        <li className="text-lg font-normal">Jarak waktu donor darah terakhir minimal 3 bulan atau 12 minggu, jika sebelumnya sudah pernah menjadi pendonor darah</li>
                        <li className="text-lg font-normal">Tidak sedang dalam kondisi sakit atau memiliki keluhan tertentu, seperti lemas, batuk, atau demam</li>
                        <li className="text-lg font-normal">Bersedia menyumbangkan darah secara sukarela</li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-52 mt-8">
                <div className="flex flex-col justify-start gap-3">
                    <h3 className="font-bold text-xl">
                    Pendonor darah juga harus memiliki kondisi kesehatan yang baik dan tidak memiliki penyakit tertentu yang dapat menular melalui darah. Selain itu, ada beberapa syarat donor darah lain yang tidak boleh dimiliki oleh seorang pendonor darah, antara lain:                </h3>
                    <ul className="list-disc pl-6">
                        <li className="text-lg font-normal">Menderita penyakit tertentu, seperti Diabetes, kanker, penyakit jantung, masalah paru-paru, atau gangguan fungsi ginjal</li>
                        <li className="text-lg font-normal">Memiliki tekanan darah tinggi atau rendah</li>
                        <li className="text-lg font-normal">Menderita epilepsi atau sering kejang</li>
                        <li className="text-lg font-normal">Menderita penyakit menular atau berisiko tinggi terkena penyakit menular, seperti sifilis, HIV/AIDS, hepatitis B, hepatitis C, atau malaria</li>
                        <li className="text-lg font-normal">Mengonsumsi obat-obatan atau sedang menjalani pengobatan tertentu</li>
                        <li className="text-lg font-normal">Memiliki gangguan perdarahan, seperti Hemofilia</li>
                        <li className="text-lg font-normal">Memiliki riwayat penggunaan narkoba dalam bentuk suntik</li>
                        <li className="text-lg font-normal">Memiliki kecanduan terhadap minuman keras</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageSyarat