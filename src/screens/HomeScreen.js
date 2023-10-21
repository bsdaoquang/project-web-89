/** @format */

import { Button, Card, Form, Input } from 'antd';
import React, { useState } from 'react';
import UserComponent from '../components/UserComponent';

const HomeScreen = ({ user, handlePushProfile }) => {
	const [form] = Form.useForm();

	const handleLogin = (vals) => {
		handlePushProfile(vals);
		form.resetFields();
	};

	return (
		<div className='container mt-4'>
			<UserComponent user={user} />

			<div className='row'>
				<div className='col'>
					<Card>
						<Form form={form} layout='vertical' onFinish={handleLogin}>
							<Form.Item name={'email'} label='Email'>
								<Input placeholder='Email' />
							</Form.Item>
							<Form.Item name={'password'} label='password'>
								<Input placeholder='Password' />
							</Form.Item>
						</Form>

						<div className='text-right mt-2'>
							<Button onClick={() => form.submit()}>Agree</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
