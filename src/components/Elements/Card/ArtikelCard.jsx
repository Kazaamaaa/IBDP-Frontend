// eslint-disable-next-line react/prop-types
const ArtikelCard = ({ description, title, image, onClick }) => {

    const titleHeight = 90; 
  
    return (
      <div className=" inline-block overflow-hidden max-w-lg mx-auto bg-white m-6 p-8" onClick={onClick}>
        <div className="rounded-2xl" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)' }}>
          <img
            className="w-full h-48 object-cover rounded-lg"
            src={image}
            alt="News Thumbnail"
          />
          <div className="p-6">
            <p className="text-gray-950 font-bold text-lg mb-3" style={{ height: `${titleHeight}px`, overflow: 'hidden' }}>
              {title}
            </p>
            <hr className="border border-black mt-4 mb-6" />
            <p
              className="text-gray-950  text-base mb-4 text-justify"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4,
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
  
  export default ArtikelCard;
  