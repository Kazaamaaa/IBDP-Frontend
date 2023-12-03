import { useEffect, useState } from 'react'
import InputForm from '../Elements/Input'
import CustomButton from '../Elements/Button/CostumButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormRegister = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [no_telp, setNoTelp] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const [msg, setMsg] = useState('')
    const [showAlert, setShowAlert] = useState(false);


    const Register = async (e) => {
        e.preventDefault();
      
        if (!name || !email || !no_telp || !username || !password || !confirmPassword) {
          setMsg('Please fill in all fields');

          return;
        } else {
      
            try {
            await axios.post('http://localhost:3000/users', {
                name: name,
                email: email,
                no_telp: no_telp,
                username: username,
                password: password,
                confirmPassword: confirmPassword,
            });
            navigate('/login');
            } catch (error) {
            setMsg(error.response.data.msg);
            }
        }
      };
      
      useEffect(() => {
        if (msg !== null && msg.trim() !== '') {
          setShowAlert(true);
        } else {
          setShowAlert(false);
        }
      }, [msg]);
    
      return (
        <form>
          {showAlert && (
            <div className="flex items-center bg-red-200 text-white text-sm font-bold px-4 py-3" role="alert">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
              </svg>
              <p>{msg}</p>
            </div>
          )}
            <InputForm
                label='Nama'
                type='text'
                title='Nama'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <InputForm
                label='Email'
                type='email'
                title='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <InputForm
                label='Nomor Telepon'
                type='number'
                title='Nomor Telepon'
                value={no_telp}
                onChange={(e) => setNoTelp(e.target.value)} />
            <InputForm
                label='Nama Pengguna'
                type='text'
                title='Nama Pengguna'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <InputForm
                label='Kata Sandi'
                type='password'
                title='Kata Sandi'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <InputForm
                label='Konfirmasi Kata Sandi'
                type='password'
                title='Konfirmasi Kata Sandi'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />
            <CustomButton type="filled" title="Register" size="sm" onClick={Register} />
        </form>

    )
}

export default FormRegister