import { FC } from 'react';
import { taleContentRender } from '../utils/taleContentRender';
import Clouds from '../../animations/Clouds/Clouds';
import './Dragon.scss';
import { ITaleResponse } from '../../types/ITaleResponse.interface';

interface IDragonProps {
	tale: ITaleResponse;
}

const Dragon: FC<IDragonProps> = ({ tale }) => {
	return (
		<div className="dragon">
			<div className="dragon__hero">
				<div className="cloudsBox">
					<Clouds />
				</div>
				<div className="dragon__title">Дракон</div>
				<div className="ground" />
				<div className="dragon__hero__back" />
			</div>
			<div className="dragon__container">
				{taleContentRender(tale)}
				<div className="epilogue dragon__epilogue">
					<div className="dragon__epilogue__pic" />
				</div>
			</div>
		</div>
	);
};

export default Dragon;
