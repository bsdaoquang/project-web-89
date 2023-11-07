/** @format */

import { Button, Card, Input } from 'antd';
import { Lock, Sms } from 'iconsax-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleLogin = () => {
		if (email && password) {
			navigate('/profile');
		} else {
			alert('Type email and password!!!');
		}
	};

	return (
		<div>
			<div className='container mt-4'>
				<div className='col-6 offset-3'>
					<Card>
						<div className='text-center'>
							<h1>LOGIN</h1>
						</div>

						<Input
							placeholder='email'
							type='email-address'
							allowClear
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							prefix={<Sms size={20} color='#676767' />}
							size='large'
						/>
						<Input.Password
							className='mt-3'
							placeholder='Password'
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							prefix={<Lock size={20} color='#676767' />}
							size='large'
						/>

						<Button
							onClick={handleLogin}
							style={{ width: '100%', marginTop: 20 }}
							type='primary'
							size='large'>
							Login
						</Button>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;