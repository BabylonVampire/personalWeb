import React, { FC, useEffect } from 'react'
import Sea from '../../pages/SeaPage/Sea';

interface ITaleProps {
	tale: {
		preview: {
			title: string;
			description: string;
			image: string;
			backImage: string;
		}
		name: string;
		link: string;
		content: {
			type: string,
			text: string,
			image: string,
		}[]
	}
}

const Tale: FC<ITaleProps> = ({ tale }) => {

	useEffect(() => {
		scroll(0, 0);
	}, [])
	

	const fairyDefinition = (name: string) => {
		switch (name) {
			case 'Sea':
				return (<Sea tale={tale}/>);
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