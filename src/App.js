/** @format */

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ThemeContext from './contexts/themeContext';
import HomeScreen from './screens/HomeScreen';
import About from './screens/Aubout';

import ProfileScreen from './screens/ProfileScreen';
import HeaderComponent from './components/HeaderComponent';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import PostDetail from './screens/PostDetail';

function App() {
	const [theme, setTheme] = useState({ theme: 'light', lang: 'vi' });

	return (
		<>
			<BrowserRouter>
				<ThemeContext.Provider value={{ theme, setTheme }}>
					<HeaderComponent />
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/about' element={<About />} />
						<Route path='/profile' element={<ProfileScreen />} />
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/search' element={<SearchScreen />} />
						<Route path='/post-detail' element={<PostDetail />} />
					</Routes>
				</ThemeContext.Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
