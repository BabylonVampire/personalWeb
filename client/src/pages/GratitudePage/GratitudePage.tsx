import runningText from 'fairy-anims/src/Lines'
import { FC, useEffect } from 'react'
import './GratitudePage.scss'
import setSky from 'fairy-anims/src/Stars';
import { ILinesOptions } from 'fairy-anims/src/Lines/lines-options.interface';

interface IGratitudePageProps {
	lines: string[];
}


const GratitudePage: FC<IGratitudePageProps> = ({ lines }) => {

	useEffect(() => {
		const options: ILinesOptions = {
			shadow: false,
			repeat: true,
			color: '#fff',
			fontSizeRange: [2, 2],
			speedRange: [3000, 4000],
			lineDirection: 'horizontal'
		}

		runningText(lines, 3, 'runningLines', options);
		setSky(100, 'gratitudePage__container__starContainer');
	}, [lines])

	return (
		<div className='gratitudePage' >
			<div className="gratitudePage__container" >
				<div className="gratitudePage__container__starContainer" />
				<div className="runningLines" />
				<div className="gratitudePage__container__background" />
				<div className="gratitudePage__container__image" >
					<div className="gratitudePage__container__image__base"/>
					<div className="gratitudePage__container__image__figure gratitudePage__figure__default"/>
				</div>
			</div>
		</div>
	)
}

export default GratitudePage