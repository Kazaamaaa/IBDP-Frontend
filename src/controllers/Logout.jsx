import axios from "axios";

const FunctionLogout = () => {
  
    const Logout = async () => {
        try {
          await axios.delete('https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/logout')      
          window.location.reload();
        } catch(error) {
          console.log(error)
        }
      }

  return { Logout };
};

export default FunctionLogout;
