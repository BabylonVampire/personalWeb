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
	const description =
		'Склад забытых переживаний, что растворятся в утренней дымке, как только солнце взайдет.';
	const descriptionPS = 'Sed frustra in aeterna nocte.';
	const headTitle = 'Добро пожаловать!';
	const aboutTitle = 'Что это за место?';

	useEffect(() => {
		animationsStart();
	}, [tales]);
	return (
		<div className="mainPage">
			<Head title={headTitle} />
			<About
				title={aboutTitle}
				description={description}
				descriptionPS={descriptionPS}
			/>
			<Body gallery_items={tales} />
		</div>
	);
};

export default MainPage;
