/** @format */

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { constants } from '../constants';
import { Spin } from 'antd';
import UserComponent from '../components/UserComponent';

const PostDetail = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const postId = searchParams.get('postId');
	const [isLoading, setIsLoading] = useState(false);
	const [postDetail, setPostDetail] = useState();

	useEffect(() => {
		getPostDetail();
	}, [postId]);

	const getPostDetail = async () => {
		const api = constants.BASE_URL + '/posts/' + postId;

		setIsLoading(true);
		try {
			const result = await fetch(api);
			const res = await result.json();

			setPostDetail(res);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<div className='container'>
			{isLoading ? (
				<Spin />
			) : postDetail ? (
				<>
					<h1>{postDetail.title}</h1>
					<p>{postDetail.body}</p>
					<i>
						<UserComponent id={postDetail.userId} />
					</i>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default PostDetail;
