import { FC, useEffect, useState } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tale from './components/Tale/Tale.tsx';
import GratitudePage from './pages/GratitudePage/GratitudePage.tsx';
import { lines } from './data/pages/gratitudePageData.ts';
import { getTales } from './data/tales/getTales.ts';
import { ITaleResponse } from './types/ITaleResponse.interface.ts';
import Memory from './pages/MemoryPage/Memory.tsx';

const App: FC = () => {
	const [tales, setTales] = useState<ITaleResponse[]>([]);

	useEffect(() => {
		getTales().then((result) => setTales(result));
	}, []);

	return (
		<div className="App" id="scroll-bar">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<MainPage tales={tales} />} />
						<Route path="/memory" element={<Memory />} />
						<Route
							path="/gratitude"
							element={<GratitudePage lines={lines} />}
						/>
						{tales.map((tale) => {
							return (
								<Route
									key={tale.link}
									path={tale.link}
									element={<Tale tale={tale} />}
								/>
							);
						})}
					</Routes>
				</Layout>
			</BrowserRouter>
			<div id="scene_manager" />
		</div>
	);
};

export default App;
