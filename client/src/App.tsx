import { FC } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tales from './data/tales/tales.ts';
import Tale from './components/Tale/Tale.tsx';
import GratitudePage from './pages/GratitudePage/GratitudePage.tsx';
import { lines } from './data/pages/gratitudePageData.ts';

const App: FC = () => {

	return (

		<div className="App" >
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/gratitude" element={<GratitudePage lines={lines}/>}/>
						{
							tales.map((tale) => {
								return (
									<Route
										key={tale.link}
										path={tale.link}
										element={<Tale tale={tale} />} 
									/>
								)
							})
						}
					</Routes>
				</Layout>
			</BrowserRouter>
			<div id="scene_manager" />
		</div>
	);
}

export default App;
