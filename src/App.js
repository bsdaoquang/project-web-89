/** @format */

import { useState } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ThemeContext from './contexts/themeContext';
import HomeScreen from './screens/HomeScreen';

function App() {
	const [theme, setTheme] = useState({ theme: 'light', lang: 'vi' });

	return (
		<>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<HeaderComponent />
				<HomeScreen />
			</ThemeContext.Provider>
		</>
	);
}

export default App;
