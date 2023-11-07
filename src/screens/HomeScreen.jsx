/** @format */

import React, { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';
import { Link } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

const HomeScreen = () => {
	const langCtx = useContext(ThemeContext).theme;

	return (
		<>
			<h1>Home screen</h1>
			<p>
				<Link to={'/about'}>About</Link>
			</p>
			<Link to={'/profile'}>profile</Link>
		</>
	);
};

export default HomeScreen;
