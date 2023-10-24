/** @format */

import { Avatar, Button, List, Space, Table } from 'antd';
import './App.css';
import { posts } from './data/posts';
import ListUserItem from './components/ListUserItem';
import { Edit, Trash } from 'iconsax-react';

function App() {
	const columns = [
		{ key: '', dataIndex: '', title: 'Index' },
		{
			key: 'title',
			dataIndex: 'title',
			title: 'Title',
		},
		{
			key: 'Button',
			dataIndex: '',
			render: (item) => (
				<Button
					icon={<Trash color='coral' size={22} variant='Bold' />}
					type='text'
				/>
			),
		},
	];

	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-8 offset-2'>
					<Table dataSource={posts} columns={columns} />
					{/* <List
						pagination
						dataSource={posts}
						renderItem={(item, _index) => (
							<List.Item
								key={item.id}
								extra={
									<Space>
										<Button
											type='text'
											icon={<Edit size={18} color='coral' />}
										/>
									</Space>
								}>
								<List.Item.Meta
									avatar={<Avatar size={40}>{item.userId}</Avatar>}
									title={item.title}
									description={item.body}
								/>
							</List.Item>
						)}
					/> */}
				</div>
			</div>
		</div>
	);
}

export default App;
