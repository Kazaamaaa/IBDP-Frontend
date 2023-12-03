
// eslint-disable-next-line react/prop-types
const NewsCard = ({ description, date, image, onClick }) => {

    return (
      <div className="max-w-md mx-auto bg-white m-6 p-8" onClick={onClick}>
        <div className="rounded-2xl" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)' }}>
          <img
            className="w-full h-48 object-cover rounded-lg"
            src={image}
            alt="News Thumbnail"
          />
          <div className="p-6">
            <p className="text-gray-950 font-bold text-sm">{date}</p>
            <hr className="border border-black mt-4 mb-4" />
            <p
              className="text-gray-950  text-base mb-4 text-justify"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsCard;
  