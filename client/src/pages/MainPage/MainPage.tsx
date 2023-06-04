import { FC, useEffect } from 'react';
import Head from './components/Head/Head.tsx';
import Body from './components/Body/Body.tsx';
import About from './components/About/About.tsx';
import { ITaleResponse } from '../../types/ITaleResponse.interface.ts';
import { animationsStart } from './utils/animationsStart.ts';

interface IMainPageProps {
	tales: ITaleResponse[];
}

const MainPage: FC<IMainPageProps> = ({ tales }) => {
	useEffect(() => {
		animationsStart();
	}, [tales]);
	return (
		<div className="mainPage">
			<Head title={'Добро пожаловать!'} />
			<About title="Что это за место?" description="asd" />
			<Body gallery_items={tales} />
		</div>
	);
};

export default MainPage;
