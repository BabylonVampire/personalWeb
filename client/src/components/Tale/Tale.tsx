import { FC, useEffect, useState } from 'react';
import Sea from '../../pages/SeaPage/Sea';
import Dragon from '../../pages/DragonPage/Dragon';
import Waste from '../../pages/WastePage/Waste';
import { ITaleResponse } from '../../types/ITaleResponse.interface';
import { getTale } from '../../data/tales/getTale';
import './Tale.scss';

interface ITale {
	tale: ITaleResponse;
}

const Tale: FC<ITale> = ({ tale }) => {
	const [fullTale, setFullTale] = useState<ITaleResponse>();

	useEffect(() => {
		scroll(0, 0);
		getTale(tale.title).then((result) => {
			setFullTale(result);
		});
	}, [tale.title]);

	console.log(fullTale);

	if (fullTale === undefined) {
		return <div className="tale__loading">Загрузка...</div>;
	}

	const fairyDefinition = (title: string) => {
		switch (title) {
			case 'Sea':
				return <Sea tale={fullTale} />;
			case 'Dragon':
				return <Dragon tale={fullTale} />;
			case 'Hero':
				return;
			case 'wasteLand':
				return <Waste tale={fullTale} />;
			case 'Tower':
				return;
			default:
				break;
		}
	};

	return <div className="tale">{fairyDefinition(tale.title)}</div>;
};

export default Tale;
