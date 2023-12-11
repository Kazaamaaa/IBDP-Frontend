import LayoutAdmin from "../components/LayoutAdmin";
import { GoldarAddData } from "../../../controllers/GolonganDarahData";
import { useNavigate } from "react-router-dom";
import useTokenRefresh from "../../../controllers/useToken";
import { useEffect, useState } from "react";

const GoldarAdd = () => {
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
    type, 
    jumlah, 
    handleContentChange, 
    handleTitleChange,
    handleSubmit } = GoldarAddData()
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
            <h1 className="pb-3 font-semibold text-xl text-gray-900">Add Golongan Darah</h1>
            <form className="border-2 border-gray-600 p-8">
              <div className="mb-4">
                <label htmlFor="type_goldar" className="block text-gray-700 text-sm font-bold mb-2">
                  Type Golongan Dara
                </label>
                <input
                  type="text"
                  id="type_goldar"
                  name="type_goldar"
                  value={type}
                  onChange={handleTitleChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="jumlah_goldar" className="block text-gray-700 text-sm font-bold mb-2">
                  Jumlah Golongan Darah
                </label>
                <input
                  type="number"
                  id="type_goldar"
                  name="type_goldar"
                  value={jumlah}
                  onChange={handleContentChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                />
              </div>

  
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-sm px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white focus:outline-none focus:shadow-outline"
              >
                Add Golongan Darah
              </button>
            </form>
          </section>
        </div>
      </LayoutAdmin>
    );
  };
  
  export default GoldarAdd;