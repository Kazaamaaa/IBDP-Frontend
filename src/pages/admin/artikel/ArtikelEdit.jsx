import LayoutAdmin from "../components/LayoutAdmin";
import { ArtikelEditData } from "../../../controllers/ArtikelData";
import { useNavigate } from "react-router-dom";
import useTokenRefresh from "../../../controllers/useToken";
import { useEffect, useState } from "react";

const ArtikelEdit = () => {
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
    title,
    content,
    imagePreview,
    handleContentChange,
    handleImageChange,
    handleTitleChange,
    handleSubmit
  } = ArtikelEditData()
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
            <h1 className="pb-3 font-semibold text-xl text-gray-900">Edit Artikel</h1>
            <form className="border-2 border-gray-600 p-8">
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="border rounded-md py-2 px-3 w-full focus:outline-none focus:shadow-outline"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={content}
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
  
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-sm px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white focus:outline-none focus:shadow-outline"
              >
                Edit Artikel
              </button>
            </form>
          </section>
        </div>
      </LayoutAdmin>
    );
  };
  
  export default ArtikelEdit;