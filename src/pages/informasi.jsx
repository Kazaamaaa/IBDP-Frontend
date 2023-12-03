import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layouts/Layout'
import informasi from '../assets/img/informasi.svg'
import SearchBar from '../components/Elements/Search/search'
import ArtikelCard from '../components/Elements/Card/ArtikelCard'
import axios from 'axios'

const PageInformasi = () => {
  const [artikel, setArtikel] = useState([])
  const [filteredArtikel, setFilteredArtikel] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
      setSearchTerm(searchTerm);
  };

  const handletodetailStories = (id) => {
      navigate(`/artikel/${id}`)
  }

  useEffect(() => {
      getArtikel()
  }, []) // Tambahkan dependency array kosong untuk memastikan useEffect hanya dijalankan sekali

  useEffect(() => {
      const filtered = artikel.filter((story) =>
          story.judul.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArtikel(filtered);
  }, [searchTerm, artikel])

  const getArtikel = async() => {
      try {
          const response = await axios.get("http://localhost:3000/artikel")
          setArtikel(response.data)
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  }

  const displayArtikel = searchTerm ? filteredArtikel : artikel;

  return (
    <Layout>
      <div className="mt-20 bg-red-200 mx-4 md:mx-8 rounded-2xl p-4 md:p-10">
        <div className="container mx-auto px-4 ">
          <div className="container mx-auto grid grid-cols-12 gap-4 md:gap-10 w-full">
            <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center">
              <img src={informasi} alt="donor" className="items-center mt-4" />
            </div>
            <div className="col-span-12 md:col-span-8 md:p-4 p-2 justify-center w-full h-full align-middle">
            <h1 className="text-justify text-black text-3xl font-bold mt-5">Artikel Terpopuler</h1>

              <p className="text-justify text-black text-lg mt-2 md:mt-5">
                Bukan hanya bisa membantu menyelamatkan hidup orang lain, manfaat donor darah juga dapat dirasakan langsung oleh pendonornya. Ingin tahu apa saja manfaatnya? Yuk, simak artikel berikut!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4 mt-8">
                <div className="rounded-2xl flex flex-col md:flex-row items-center">
                    <h3 className="text-justify text-black text-xl font-bold mt-2 md:mt-5 md:mx-5">Artikel Terbaru</h3>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
            <div className="mt-8">
                <div className="mb-2">
                    <div className="mx-auto grid grid-cols-12 w-full">
                        {displayArtikel.map((story) => (
                            <div key={story.id} className="col-span-12 md:col-span-3 flex justify-center mb-4">
                                <ArtikelCard
                                    image={story.url}
                                    title={story.judul}
                                    description={story.content}
                                    onClick={() => handletodetailStories(story.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default PageInformasi