/** @format */

import React, { useState } from 'react';

const HomeScreen = () => {
	const [likeState, setLikeState] = useState('');

	const [username, setUsername] = useState('');

	const color = 'red';
	const name = 'MindX';

	return (
		<div>
			<p>{username}</p>
			<input
				type='text'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<h2 style={{ color }}>Title: {name}</h2>
			<h1
				style={{
					color,
				}}>
				{likeState}
			</h1>
			<br />

			<button onClick={() => alert(username)}>Show username</button>
			<button onClick={() => setUsername('')}>clear</button>
			<div
				style={{
					padding: 10,
				}}>
				<button
					onClick={() => {
						setLikeState('Liked');
					}}>
					Like
				</button>
				<button
					onClick={() => {
						setLikeState('DisLike');
					}}>
					Dislike
				</button>
			</div>
		</div>
	);
};

export default HomeScreen;
