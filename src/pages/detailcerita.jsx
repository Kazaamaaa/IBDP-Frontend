import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons'
import Layout from '../components/Layouts/Layout'
import { useEffect } from 'react'
import { StoriesDetail } from '../controllers/StoriesData'


// eslint-disable-next-line react/prop-types
const DetailCerita = () => {

    const { title, content, imagePreview,name, formattedDate, getStoriesId} = StoriesDetail()
    useEffect(() => {
      getStoriesId()
    }, [])

    return (
        <Layout>
        <div className="flex justify-center items-center p-8 m-8 rounded-lg ">
        {/* eslint-disable-next-line react/prop-types */}
        <img src={imagePreview} 
          className="object-cover object-top w-full h-80 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start px-11 mx-11">
          <div className="text-justify  items-start rounded-lg">
          {/* eslint-disable-next-line react/prop-types */}
          <h2 className="text-xl font-bold pt-6 pb-6">{title}</h2>
          <div className="flex justify-between space-x-4 pt-4 pb-4">
                <div className="items-end space-x-4">
                  {/* eslint-disable-next-line react/prop-types */}
                  <span className=" ml-1"><FontAwesomeIcon icon={faUser} /> {name}</span>
                </div>

                <div className="flex items-end px-4">
                  <span className=" ml-1"><FontAwesomeIcon icon={faClock} /> {formattedDate}</span>
                </div>

          </div>
        </div>
        <div className='flex flex-col justify-center '>
          <hr className="border border-black mt-4 mb-4" />

          {/* eslint-disable-next-line react/prop-types */}
          <p className="text-justify">{content}</p>
        </div>
        </div>
        </Layout>
    )
}

export default DetailCerita