// Form.jsx
import { useForm } from 'react-hook-form'
import s from './Form.module.css'
import { Link } from 'react-router-dom'
import { InputField } from './InputField'
import { PassInputField } from './PassInputField'
import { yupResolver } from '@hookform/resolvers/yup'

export const Form = ({ onDataSubmit, formType, values, schema }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: values,
		resolver: yupResolver(schema),
	})

	const submit = data => {
		onDataSubmit(data)
		reset()
	}

	return (
		<div className={s.containerForm}>
			<form className={s.form} onSubmit={handleSubmit(submit)}>
				{formType !== 'login' && (
					<InputField register={register} errors={errors} label='Name:' placeholder='Enter name' name='name' />
				)}
				<InputField register={register} errors={errors} label='Email:' placeholder='Enter email' name='email' />

				<PassInputField
					register={register}
					errors={errors}
					label='Password:'
					placeholder='Enter password'
					name='password'
				/>
				{formType !== 'login' && (<PassInputField
					register={register}
					errors={errors}
					label='Confirm pass:'
					placeholder='Enter password'
					name='confirmPassword'
				/>)}

				<button>{formType === 'login' ? 'Login' : 'Register'}</button>
				<p className={s.paragraph}>
					{formType !== 'login' ? 'You already have account?' : 'You do not have account?'}
					{formType === 'login' ? <Link className={s.link} to='/register'>Sign in!</Link> : <Link className={s.link} to='/login'>Sign up!</Link>}
				</p>
			</form>
		</div>
	)
}