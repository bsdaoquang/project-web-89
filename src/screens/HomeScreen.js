/** @format */

import { Button, Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const HomeScreen = () => {
	const [form] = Form.useForm();

	const handleLogin = (vals) => {
		console.log(vals);
	};

	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-6 offset-3'>
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
							<Button onClick={() => form.submit()}>Login</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
