import axios from "axios";

const FunctionLogout = () => {
  
    const Logout = async () => {
        try {
          await axios.delete('https://upset-polo-shirt-ray.cyclic.app/logout')      
          window.location.reload();
        } catch(error) {
          console.log(error)
        }
      }

  return { Logout };
};

export default FunctionLogout;
