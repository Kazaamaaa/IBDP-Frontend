import React from 'react'
import Label from './Label'
import CustomInput from './CustomInput'


const InputForm = (props) => {

    const {label,variant, placeholder,htmlfor,title,type, value, onChange} = props
  return (
    <div className='mb-6'>
        <Label htmlFor={htmlfor}>{title}</Label>
        <CustomInput variant={variant} label={label} placeholder={placeholder} value={value} onChange={onChange} type={type}/>
    </div>
  )
}

export default InputForm