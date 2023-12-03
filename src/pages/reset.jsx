
import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/Elements/Button/CostumButton';
import InputForm from '../components/Elements/Input';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.patch('http://localhost:3000/newPassword', {
        email: email,
        password: password
      });
  
  
      navigate('/login')
    } catch (error) {
      if (error.response) {
        console.log('Error Response:', error.response.data);
      }
    }
  };

  return (
    <form>
        <InputForm label="Email Pengguna" variant="outlined" title="Email Pengguna" type="email" value={email} onChange={(e) => setemail(e.target.value)} />
        <InputForm label="Kata Sandi" variant="outlined" title="Kata Sandi" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='flex justify-center'>
            <CustomButton variant="filled" size="sm" title="Send" onClick={handleLogin} />
        </div>
    </form>
  );
};

export default ResetPassword;
