/** @format */

import React, { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';

export const ContainerComponent = ({ children }) => {
	const themeCtx = useContext(ThemeContext);

	return (
		<div
			style={{
				backgroundColor: themeCtx.theme.theme === 'light' ? 'white' : '#000',
			}}>
			<div className='container pt-4 ' style={{ height: '100vh' }}>
				{children}
			</div>
		</div>
	);
};
