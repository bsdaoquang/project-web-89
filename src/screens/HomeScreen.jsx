/** @format */

import { Card, message, List, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { constants } from '../constants';
import UserComponent from '../components/UserComponent';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { axiosClient } from '../axiosClient';

const HomeScreen = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		const api = `/posts`;

		setIsLoading(true);

		const res = await axiosClient(api);

		if (res) {
			setPosts(res);
		}

		setIsLoading(false);
	};

	return (
		<div>
			<div className='container'>
				<div className='col-8 offset-2 mt-4'>
					<Card>
						{isLoading ? (
							<Spin />
						) : posts.length > 0 ? (
							<List
								pagination
								dataSource={posts}
								renderItem={(item) => (
									<List.Item key={item.id}>
										<List.Item.Meta
											title={
												<Link to={`post-detail?postId=${item.id}`}>
													{item.title}
												</Link>
											}
											description={<UserComponent id={item.userId} />}
										/>
									</List.Item>
								)}
							/>
						) : (
							<p>Posts not found</p>
						)}
					</Card>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
