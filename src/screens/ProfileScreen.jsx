/** @format */

import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = ({ profiles }) => {
	const navigate = useNavigate();

	return (
		<>
			<h1>Profile screen</h1>

			<Button onClick={() => navigate('/')}>Go home</Button>
		</>
	);
};

export default ProfileScreen;
