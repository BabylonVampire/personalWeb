import { FC, useEffect } from 'react';
import './Sea.scss';
import Wave from '../../animations/Wave/Wave';
import setSky from 'fairy-anims/src/Stars';
import TaleTitle from '../../components/Tale/TaleTitle/TaleTitle';
import { ITaleProps } from '../../types/ITaleProps.interface';
import TaleText from '../../components/Tale/TaleText/TaleText';
import TaleImage from '../../components/Tale/TaleImage/TaleImage';

interface ISeaProps {
	tale: ITaleProps;
}

const Sea: FC<ISeaProps> = ({ tale }) => {

	useEffect(() => {
		setSky(100, 'starContainer')
	}, [])

	return (
		<div className='sea'>
			<div className="sea_hero" />
			<div className="starContainer" />
			<Wave />
			<div className="seaTaleContainer">
				{
					tale.content.map((item) => {
						switch (item.type) {
							case 'title':
								return (<TaleTitle className={item.className} options={item.options} text={item.text} />);
							case 'text':
								return (<TaleText className={item.className} options={item.options} text={item.text} />);
							case 'image':
								return (<TaleImage className={item.className} options={item.options} text={item.text}/>);
							default:
								console.error("[!] Invalid 'type' value, use only 'title', 'text', 'image'")
								break;
						}
					})
				}
				<div className="epilogue" />
			</div>
		</div>
	)
}

export default Sea;