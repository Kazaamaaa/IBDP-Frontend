import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'
import { Link } from 'react-router-dom'
import AuthNavbar from '../components/Layouts/AuthNavbar'


const LoginPage = () => {
  return (
    <>
    <AuthNavbar/>
        <AuthLayouts title="Login" desc="Masuk ke akun Anda" type="login">
          <FormLogin />
        </AuthLayouts>
      
    </>
  )
}

export default LoginPage