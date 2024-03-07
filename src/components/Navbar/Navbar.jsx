// Navbar.jsx
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSlice'
import { logoutThunk } from '../../redux/auth/operations'

export const Navbar = () => {
	const { email, name } = useSelector(selectUser)
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const dispatch = useDispatch()
	return (
		<div className={s.wrapper}>
			<Link className={s.homeLink} to='/'>
				Phonebook
			</Link>
			<div>{email}</div>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/contacts'>Contacts</NavLink>
				{!isLoggedIn && (
					<>
						<NavLink to='/register'>Register</NavLink>
						<NavLink to='/login'>Login</NavLink>
					</>
				)}
				{isLoggedIn && (
					<>
						<button onClick={() => dispatch(logoutThunk())}>Exit</button>
					</>
				)}
			</nav>
		</div>
	)
}