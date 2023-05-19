import { FC, useEffect } from 'react';
import './Sea.scss';
import Wave from '../../animations/Wave/Wave';
import setSky from 'fairy-anims/src/Stars';
import TaleTitle from '../../components/Tale/TaleTitle/TaleTitle';
import { ITaleProps } from '../../components/Tale/ITaleProps.interface';
import TaleText from '../../components/Tale/TaleText/TaleText';

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
								return (<></>);
							default:
								return (<></>);
						}
					})
				}
				<div className="epilogue" />
			</div>
		</div>
	)
}

export default Sea;