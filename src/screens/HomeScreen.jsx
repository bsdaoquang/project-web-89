/** @format */

import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../contexts/themeContext';
import { Link, useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import { Card, Input, List } from 'antd';
import { posts } from '../data/posts';
import { SearchNormal1 } from 'iconsax-react';

const HomeScreen = () => {
	const langCtx = useContext(ThemeContext).theme;

	const [searchKey, setSearchKey] = useState('');

	const navigate = useNavigate();

	// const handleSearchPostByKey = () => {
	// 	if (searchKey) {
	// 		const items = posts.filter((element) =>
	// 			element.title.includes(searchKey)
	// 		);

	// 		items.length > 0 && setResults(items);
	// 	} else {
	// 		setResults([]);
	// 	}
	// };

	return (
		<>
			<h1>Home screen</h1>

			<div className='col col-8 offset-2'>
				<Input
					allowClear
					value={searchKey}
					size='large'
					onChange={(event) => setSearchKey(event.target.value)}
					onPressEnter={() => navigate(`/search?q=${searchKey}`)}
					prefix={<SearchNormal1 size={18} color='#676767' />}
					placeholder='Search'
				/>

				{/* <Card
					extra={
						<Input
							allowClear
							value={searchKey}
							onChange={(event) => setSearchKey(event.target.value)}
							prefix={<SearchNormal1 size={18} color='#676767' />}
							placeholder='Search'
						/>
					}>
					<List
						dataSource={searchKey ? results : posts}
						renderItem={(item) => (
							<List.Item key={item.id}>
								<List.Item.Meta title={item.title} description={item.body} />
							</List.Item>
						)}
					/>
				</Card> */}
			</div>
		</>
	);
};

export default HomeScreen;
