import LayoutAdmin from "../components/LayoutAdmin";
import { LokasiEditData } from "../../../controllers/LokasiData";
import { useNavigate } from "react-router-dom";
import useTokenRefresh from "../../../controllers/useToken";
import { useEffect, useState } from "react";

const LokasiEdit = () => {
  const navigate = useNavigate()
  const {data, refreshToken} = useTokenRefresh()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    if (data && data.role !== undefined) {
      setIsLoading(false);
    }
  }, [data]);

  const { 
    nama, 
    tempat,
    waktu,
    imagePreview,
    waktubuka,
    waktutup,
    handleTimeBukaChange,
    handleTimeTutupChange,
    handleTimeChange,
    handleImageChange, 
    handleContentChange, 
    handleTitleChange,
    handleSubmit } = LokasiEditData()
    
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (data.role !== 'admin') {
      return navigate('/');
    }
    return (
      <LayoutAdmin>
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">

          <section className="p-8 ">
            <h1 className="pb-3 font-semibold text-xl text-gray-900">Edit Lokasi</h1>
            <form className="border-2 border-gray-600 p-8">
              <div className="mb-4">
                <label htmlFor="nama_tempat" className="block text-gray-700 text-sm font-bold mb-2">
                  Nama Tempat
                </label>
                <input
                  type="text"
                  id="nama_tempat"
                  name="nama_tempat"
                  value={nama}
                  onChange={handleTitleChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="tempat" className="block text-gray-700 text-sm font-bold mb-2">
                  Tempat
                </label>
                <textarea
                  id="tempat"
                  name="tempat"
                  value={tempat}
                  onChange={handleContentChange}
                  className="border rounded-md py-2 px-3 w-full h-32 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                />

                {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="mt-2 rounded-md max-w-full"
                  style={{ maxHeight: "200px" }}
                />
              )}
              </div>

              <div className="mb-4">
                <label htmlFor="tanggal_dan_waktu_buka" className="block text-gray-700 text-sm font-bold mb-2">
                  Tanggal
                </label>
                <input
                  type="date"
                  id="tanggal_dan_waktu_buka"
                  name="tanggal_dan_waktu_buka"
                  value={waktu}
                  onChange={handleTimeChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="waktu_buka" className="block text-gray-700 text-sm font-bold mb-2">
                  Waktu Buka
                </label>
                <input
                  type="time"
                  id="waktu_buka"
                  name="waktu_buka"
                  value={waktubuka}
                  onChange={handleTimeBukaChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="waktu_tutup" className="block text-gray-700 text-sm font-bold mb-2">
                  Waktu Tutup
                </label>
                <input
                  type="time"
                  id="waktu_tutup"
                  name="waktu_tutup"
                  value={waktutup}
                  onChange={handleTimeTutupChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                />
              </div>
  
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-sm px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white focus:outline-none focus:shadow-outline"
              >
                Edit Lokasi
              </button>
            </form>
          </section>
        </div>
      </LayoutAdmin>
    );
  };
  
  export default LokasiEdit;