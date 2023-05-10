import { FC } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tales from './data/tales/tales.ts';
import Tale from './pages/MainPage/components/Tale/Tale.tsx';

const App: FC = () => {

	return (

		<div className="App" >
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<MainPage />} />
						{
							tales.map((tale) => {
								return (
									<Route path={`tale${tales.indexOf(tale)}`} element={<Tale name={tale.name} content={tale.content} />} />
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
