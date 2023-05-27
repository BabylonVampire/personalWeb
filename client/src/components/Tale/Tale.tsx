import { FC, useEffect } from 'react'
import Sea from '../../pages/SeaPage/Sea';
import { ITaleProps } from '../../types/ITaleProps.interface';
import Dragon from '../../pages/DragonPage/Dragon';
import Waste from '../../pages/WastePage/Waste';

interface ITale {
	tale: ITaleProps;
}

const Tale: FC<ITale> = ({ tale }) => {

	useEffect(() => {
		scroll(0, 0);
	}, [])


	const fairyDefinition = (name: string) => {
		switch (name) {
			case 'Sea':
				return (<Sea tale={tale} />);
			case 'Dragon':
				return (<Dragon tale={tale} />);
			case 'Hero':
				return;
			case 'Waste':
				return (<Waste tale={tale} />);
			case 'Tower':
				return;
			default:
				break;
		}
	}

	return (
		<div className='tale'>
			{
				fairyDefinition(tale.name)
			}
		</div>
	)
}

export default Tale;