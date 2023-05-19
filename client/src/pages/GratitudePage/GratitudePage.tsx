import runningText from 'fairy-anims/src/Lines'
import { FC, useEffect } from 'react'
import './GratitudePage.scss'
import setSky from 'fairy-anims/src/Stars';
import { ILinesOptions } from 'fairy-anims/src/Lines/lines-options.interface';

interface IGratitudePageProps {
	lines: string[];
}


const GratitudePage: FC<IGratitudePageProps> = ({ lines }) => {

	const options: ILinesOptions = {
		shadow: false,
		repeat: true,
		color: '#fff',
		fontSizeRange: [2, 2],
		speedRange: [3000, 4000],
		lineDirection: 'horizontal'
	}

	useEffect(() => {
		runningText(lines, 3, 'runningLines', options);
		setSky(500, 'gratitudePage');
	}, [])

	return (
		<div className='gratitudePage' >
			<div className="runningLines" />
			<div className="gratitudePage_container" >
				<div className="gratitudePage_image" />
			</div>
		</div>
	)
}

export default GratitudePage