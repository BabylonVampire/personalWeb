import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FC, useEffect, useRef, useState } from 'react';
import { lines } from './data/pages/gratitudePageData.ts';
import { getTales } from './data/tales/getTales.ts';
import { ITaleResponse } from './types/ITaleResponse.interface.ts';
import Layout from './components/Layout/Layout.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import Tale from './components/Tale/Tale.tsx';
import GratitudePage from './pages/GratitudePage/GratitudePage.tsx';
import Memory from './pages/MemoryPage/Memory.tsx';
import UnknownPage from './pages/UnknownPage/UnknownPage.tsx';
import './App.scss';
import TestPage from './pages/TestPage/TestPage.tsx';
import Pan from './pages/PanPage/Pan.tsx';

const App: FC = () => {
	const [tales, setTales] = useState<ITaleResponse[]>([]);

	useEffect(() => {
		getTales().then((result) => setTales(result));
	}, []);

	return (
		<div className="App" data-scroll-container>
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
						<Route path="*" element={<UnknownPage />} />
						<Route path="pan" element={<Pan />} />
						<Route path="/test" element={<TestPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
			<div id="scene_manager" />
		</div>
	);
};

export default App;
