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
              <div className="flex justify-between space-x-4 pt-4 pb-4">
                <div className="items-end space-x-4">
                  <span className=" ml-1"><FontAwesomeIcon icon={faUser} /> {name}</span>
                </div>

                <div className="flex items-end px-4">
                  <span className=" ml-1"><FontAwesomeIcon icon={faClock} /> {formattedDate}</span>
                </div>

          </div>
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

export default DetailCerita