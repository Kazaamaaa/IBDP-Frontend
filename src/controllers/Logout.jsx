import axios from "axios";

const FunctionLogout = () => {
  
    const Logout = async () => {
        try {
          await axios.delete('http://localhost:3000/logout')      
          window.location.reload();
        } catch(error) {
          console.log(error)
        }
      }

  return { Logout };
};

export default FunctionLogout;
