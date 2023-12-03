import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const StoriesCard = ({ title, story}) => {
  const userData = story || {};

    return (
        <div className="max-w-sm overflow-hidden shadow-lg mx-auto my-4 rounded-2xl p-6" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)' }}>
            {/* eslint-disable-next-line react/prop-types */}
            <Link to={`/forumberbagi/${story.item_id}`} story={story}>
            {/* eslint-disable-next-line react/prop-types */}
                <img className="object-cover w-full rounded-lg" style={{ height: '250px'}} src={story.image} />
            </Link>
            <div className=" py-3 rounded-b-lg">
                <p className="text-black text-lg " style={{ height: '60px'}}>{title}</p>
            </div>
            <hr className='border-2 ' />
            <div className="flex space-x-4 py-3">
                {/* eslint-disable-next-line react/prop-types */}
                <img className="object-cover w-10 h-10" src={userData.users.image} alt="User Image" />
                {/* eslint-disable-next-line react/prop-types */}
                <p className="text-md ">{userData.users.name} </p>
            </div>
            <p
            className="text-gray-950  text-base mb-4 text-justify"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: '70px'
            }}
          >
            {/* eslint-disable-next-line react/prop-types */}
            {story.content}
          </p>
            <div className="flex justify-between space-x-4 pt-4 pb-4">
                        <div className="flex items-start px-4">
                        {/* eslint-disable-next-line react/prop-types */}
                        <span className=" ml-1 font-bold"><FontAwesomeIcon icon={faClock} /> {story.createdAt}</span>
                        </div>

                        <div className="items-end space-x-4 px-4">
                        <FontAwesomeIcon icon={faComment} />
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        </div>
                </div>
        </div>
    );
};

export default StoriesCard;
