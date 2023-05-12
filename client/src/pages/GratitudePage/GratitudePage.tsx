import runningText from 'fairy-anims/src/Lines'
import { FC, useEffect } from 'react'
import './GratitudePage.scss'

interface IGratitudePageProps {
	lines: string[];
}

interface IOptions {
	shadow: boolean;
	repeat: boolean;
	speedRange: [number, number];
	fontSizeRange: [number, number];
	color: string;
}

const GratitudePage: FC<IGratitudePageProps> = ({lines}) => {

	const options: IOptions = {
		shadow: false,
		repeat: true,
		color: '#fff',
		fontSizeRange: [1.5, 3],
		speedRange: [3000, 7000]
	}

	useEffect(() => {
		runningText(lines, 20, 'runningLines', options);
	}, [])
	
	return (
		<div className='gratitudePage'>
			<div className="runningLines"/>
		</div>
	)
}

export default GratitudePage