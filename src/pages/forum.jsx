import Layout from '../components/Layouts/Layout'
import FloatingButton from '../components/Elements/Button/Floating'
import { useState } from 'react'
import StoriesCard from '../components/Elements/Card/StoriesCard'
import AlertPopup from './PopupForm'
import { StoriesAllData } from '../controllers/StoriesData'


const ForumPage = () => {
  const {datatabel } = StoriesAllData()
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopupVisible, setPopupVisible] = useState(false);


  const totalItems = datatabel.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleStories = datatabel.slice(startIndex, endIndex);


  const handlePageChange = (newPage) => {
    console.log('Current Page:', currentPage);
    setCurrentPage(newPage);
    console.log('New Page:', newPage);
  };

  const handleFloatingButtonClick = () => {
    setPopupVisible(true); 
  };

  const handleClosePopup = () => {
    setPopupVisible(false); 
  };

  return (
    <>
      <Layout>
      <div className="flex flex-col justify-center p-4 mt-4 items-center mx-auto px-8">
      <p className="font-bold text-2xl">Cerita Baru</p>
      <p className="font-semibold text-md">Baca pengalaman cerita para relawan</p>


    </div>
    
    <div className="flex flex-col justify-center p-4 mt-4 items-center mx-auto px-8">

        <div className="flex flex-wrap gap-8">
          {visibleStories.map((story) => (
            <StoriesCard key={story.item_id} story={story} title={story.title}  />
          ))}
        </div>
        <div className="flex mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-2 py-1 rounded ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <FloatingButton onClick={handleFloatingButtonClick} />
        <AlertPopup isVisible={isPopupVisible} onClose={handleClosePopup} />
      </div>
      </Layout>
    </>
  )
}

export default ForumPage