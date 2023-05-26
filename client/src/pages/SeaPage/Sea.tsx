import { FC, useEffect } from 'react';
import { taleContentRender } from '../utils/taleContentRender';
import { ITaleProps } from '../../types/ITaleProps.interface';
import Wave from '../../animations/Wave/Wave';
import setSky from 'fairy-anims/src/Stars';
import './Sea.scss';

interface ISeaProps {
	tale: ITaleProps;
}

const Sea: FC<ISeaProps> = ({ tale }) => {

	useEffect(() => {
		setSky(100, 'starContainer')
	}, [])

	return (
		<div className='seaTale'>
			<div className="seaTale__hero" />
			<div className="starContainer" />
			<Wave />
			<div className="seaTale__container">
				{
					taleContentRender(tale)
				}
				<div className="epilogue" />
			</div>
		</div>
	)
}

export default Sea;