import { FC } from 'react'
import { ITaleProps } from '../../types/ITaleProps.interface';
import { taleContentRender } from '../utils/taleContentRender';
import Clouds from '../../animations/Clouds/Clouds';
import './Dragon.scss';

interface IDragonProps {
	tale: ITaleProps;
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
				{
					taleContentRender(tale)
				}
				<div className="epilogue dragon__epilogue">
					<div className="dragon__epilogue__pic" />
				</div>
			</div>
		</div>
	)
}

export default Dragon;