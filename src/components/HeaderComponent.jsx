/** @format */

import { Space, Switch } from 'antd';
import React, { useContext, useState } from 'react';
import ThemeContext from '../contexts/themeContext';
import LangContext from '../contexts/langContext';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
	const themeCtx = useContext(ThemeContext);

	return (
		<div className='container-fluid bg-dark'>
			<div className='container'>
				<div
					className='row d-flex'
					style={{ justifyContent: 'flex-end', padding: '16px 0' }}>
					<Space>
						<Switch
							onChange={(val) =>
								themeCtx.setTheme({
									...themeCtx.theme,
									theme: val ? 'light' : 'dark',
								})
							}
						/>
						<Switch
							onChange={(val) =>
								themeCtx.setTheme({
									...themeCtx.theme,
									lang: val ? 'vi' : 'en',
								})
							}
						/>

						<Link to={'/login'}>Login</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default HeaderComponent;
