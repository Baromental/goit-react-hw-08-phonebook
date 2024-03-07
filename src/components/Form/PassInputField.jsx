// PassInputField.jsx
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import s from './Form.module.css'

export const PassInputField = ({ register, errors, label, name, placeholder }) => {
	const [type, setType] = useState('password')

	return (
		<div className={s.inputField}>
			<label htmlFor={name}>{label}</label>
			<input id={name} placeholder={placeholder} {...register(name)} type={type} />
			<div onClick={() => setType(type === 'password' ? 'text' : 'password')} className={s.iconBtn}>
				{type === 'password' ? <FaEyeSlash /> : <FaEye />}
			</div>
			{errors[name] && <span>{errors[name].message}</span>}
		</div>
	)
}