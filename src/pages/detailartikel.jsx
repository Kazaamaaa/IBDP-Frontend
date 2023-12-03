import Layout from "../components/Layouts/Layout"
import { useEffect } from "react"
import { ArtikelDetail } from "../controllers/ArtikelData"

const ArtikePage = () => {

    const { title, content, imagePreview, getArtikelId} = ArtikelDetail()
    useEffect(() => {
      getArtikelId()
    }, [])

    return (
        <Layout>
            <div className="flex justify-center items-center p-8 m-8 rounded-lg">
                <img
                src={imagePreview}
                alt=""
                className="object-cover object-top w-full h-80 rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-center items-start px-11 mx-11">
                <div className="text-justify items-start rounded-lg">
                </div>
                <h2 className="text-xl font-bold pt-6 pb-6">             
                {title}
                </h2>
            </div>
            <div className="flex flex-col justify-center px-11 mx-11">
                <hr className="border border-black mt-4 mb-4" />
                <p className="text-justify mt-4">
                    {content}
                </p>
            </div>
        </Layout>
    )
}

export default ArtikePage