import { FC, useEffect } from 'react'
import Sea from '../../pages/SeaPage/Sea';
import { ITaleProps } from '../../types/ITaleProps.interface';

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
				return;
			case 'Hero':
				return;
			case 'Wasteland':
				return;
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