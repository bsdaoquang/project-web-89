/** @format */

import { Avatar, Button, List, Space } from 'antd';
import { Edit } from 'iconsax-react';
import { useEffect, useState } from 'react';
import './App.css';
import { posts } from './data/posts';
import UserComponent from './components/UserComponent';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = () => {
		setData(posts);
	};

	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-8 offset-2'>
					<List
						dataSource={data}
						renderItem={(item, _index) => (
							<List.Item
								key={item.id}
								extra={
									<Space>
										<Button
											onClick={() => console.log(item)}
											type='text'
											icon={<Edit size={18} color='coral' />}
										/>
									</Space>
								}>
								<List.Item.Meta
									title={item.title}
									description={<UserComponent id={item.userId} />}
								/>
							</List.Item>
						)}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
