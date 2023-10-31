/** @format */

import { Space, Switch } from 'antd';
import React, { useContext, useState } from 'react';
import ThemeContext from '../contexts/themeContext';
import LangContext from '../contexts/langContext';

const HeaderComponent = () => {
	const themeCtx = useContext(ThemeContext);
	// const langCtx = useContext(LangContext);

	// console.log(langCtx);

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
					</Space>
				</div>
			</div>
		</div>
	);
};

export default HeaderComponent;
