/** @format */

import React, { useContext } from 'react';
import { ContainerComponent } from '../components/ContainerComponent';
import TextComponent from '../components/TextComponent';
import ThemeContext from '../contexts/themeContext';

const HomeScreen = () => {
	const langCtx = useContext(ThemeContext).theme;

	return (
		<ContainerComponent>
			<TextComponent text={langCtx.lang === 'vi' ? 'Xin chao' : 'Hello'} />
		</ContainerComponent>
	);
};

export default HomeScreen;
