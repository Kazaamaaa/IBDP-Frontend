import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userrole, setRole] = useState('');
    const [msg, setMsg] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:3000/login', {
            username: username,
            password: password
        });
    
        setRole(response.data.role)
        if (response.data.role.toLowerCase() === "admin") {
            navigate('/admin');
        } else if (response.data.role.toLowerCase() === "pengguna") {
            navigate('/');
        } else {
            setMsg("Username Tidak Ditemukan");
        }
        } catch (error) {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            setMsg(error.response.data.msg);
        }
        }
    };

    return { username, password, userrole, msg, handleLogin, handleUsername, handlePassword}
}