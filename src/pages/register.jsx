import React from 'react'
import FormRegister from '../components/Fragments/FormRegister'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import { Link } from 'react-router-dom'
import AuthNavbar from '../components/Layouts/AuthNavbar'

const RegisterPage = () => {
  return (
    <>
      <AuthNavbar />
      <AuthLayouts title="Sign Up" name="Masuk ke akun Anda" desc="Daftar Akun" type="register">
        <FormRegister />
      </AuthLayouts>
    </>
  )
}

export default RegisterPage