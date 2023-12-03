import { Input } from '@material-tailwind/react';
import React from 'react'
import Label from './Label';

const CustomInput = (props) => {
    const {variant , label, placeholder, type, value, onChange} = props;
  return (
    <>
    <Input variant={variant} label={label} placeholder={placeholder} type={type} value={value} onChange={onChange} color='red'  className="text-sm border rounded w-full py-2 px-3 text-slate-700"  />
    </>
  
  )
}

export default CustomInput