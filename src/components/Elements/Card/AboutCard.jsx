import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// eslint-disable-next-line react/prop-types
const AboutCard = ({ image, name, position, facebookLink, instagramLink, whatsappLink }) => {
    return (
      <div className="inline-block overflow-hidden shadow-lg mx-auto my-4 rounded-2xl" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)' }}>
        <div className="flex flex-col h-full " >
          <img className="object-center w-full h-64 mx-auto" src={image} alt={name} />
          <div className="flex-grow flex flex-col justify-between p-4 bg-gray-600 rounded-b-lg">
            <div>
              <div className="text-white font-bold text-xl mb-2 text-center">{name}</div>
              <p className="text-white text-base text-center">{position}</p>
            </div>
            <div className="flex justify-center space-x-4 pt-4">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutCard;
  
  