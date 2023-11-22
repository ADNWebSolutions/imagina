import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = (props) => {
    const className = props.className;
    return (
      <div className={`${className}`} >
          <a href="https://www.instagram.com/arrecife_imagina/" target="_blank" className="hover:duration-200 hover:text-sand">
            <FontAwesomeIcon icon={faInstagram} /> 
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063487303709" target="_blank" className="mx-4 hover:duration-200 hover:text-sand">
            <FontAwesomeIcon icon={faFacebook} /> 
          </a>
          <a href="https://wa.me/5493516533455?text=Buenos%20%20dias!,%20" target="_blank" className="hover:duration-200 hover:text-sand">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
      </div>
    )
  }
  
  export default SocialMedia