import React, { FC, ReactNode } from 'react';
import './Sea.scss';

interface ISeaProps {
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

const Sea: FC<ISeaProps> = ({ tale }) => {

	const taleParse = (
		content: {
			type: string,
			text: string,
			image: string,
		}[]
	): ReactNode => {
		content.map((item) => {
			switch (item.type) {
				case 'title':
					return(<></>);
				case 'image':
					return(<></>);
				case 'text':
					return(<></>);
				default:
					return(<></>);
			}
		})
		return;
	}

	return (
		<div className='sea'>
			{
				taleParse(tale.content)
			}
		</div>
	)
}

export default Sea;