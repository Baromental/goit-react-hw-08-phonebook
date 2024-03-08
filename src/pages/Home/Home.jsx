// Home.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/authSlice'
import { NavLink } from 'react-router-dom'
import s from './Home.module.css'

export const Home = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)

	return (
		<div>
			<h1 className={s.title}>Welcome on PhoneBook Application Site</h1>
			{!isLoggedIn && (
					<p className={s.paragraph}>
				Please register and login to start working with the program!
					</p>
				)}
				{isLoggedIn && (
				<p className={s.paragraph}>
					Go to the 
					{<NavLink to='/contacts' className={s.link}> Contacts</NavLink>}!
					</p>
				)}
			
		</div>
	)
}

// const dispatch = useDispatch()

