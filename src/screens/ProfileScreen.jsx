/** @format */

import { Button, List, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { constants } from '../constants';

const ProfileScreen = ({ profiles }) => {
	const navigate = useNavigate();

	const [user, setUser] = useState();
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);
	const [postsByUid, setPostsByUid] = useState([]);

	const id = searchParams.get('uid');

	useEffect(() => {
		getUserById();
		getPostsByUid();
	}, [id]);

	const getUserById = async () => {
		const api = `https://jsonplaceholder.typicode.com/users/${id}`;

		await fetch(api, {
			method: 'get',
		})
			.then((result) => result.json())
			.then((res) => {
				setUser(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getPostsByUid = async () => {
		const api = `/posts`;
		setIsLoading(true);
		try {
			const result = await fetch(`${constants.BASE_URL + api}`);

			const res = await result.json();

			const items = res.filter((element) => `${element.userId}` === id);

			setPostsByUid(items);

			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return user ? (
		<div className='container'>
			<h1>{user.name}</h1>
			{isLoading ? (
				<Spin />
			) : (
				<List
					dataSource={postsByUid}
					renderItem={(item) => (
						<List.Item key={item.id}>
							<List.Item.Meta title={item.title} />
						</List.Item>
					)}
				/>
			)}
		</div>
	) : (
		<></>
	);
};

export default ProfileScreen;
