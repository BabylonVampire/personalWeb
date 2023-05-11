import React, { FC } from 'react';
import './Sea.scss';

interface ISeaProps {
	content: {
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

const Sea: FC<ISeaProps> = ({content}) => {
  return (
	<div className='sea'>

	</div>
  )
}

export default Sea;