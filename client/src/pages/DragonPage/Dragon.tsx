import { FC } from 'react'
import { ITaleProps } from '../../types/ITaleProps.interface';
import TaleTitle from '../../components/Tale/TaleTitle/TaleTitle';
import TaleText from '../../components/Tale/TaleText/TaleText';
import TaleImage from '../../components/Tale/TaleImage/TaleImage';
import './Dragon.scss';
import Clouds from '../../animations/Clouds/Clouds';

interface IDragonProps {
	tale: ITaleProps;
}

const Dragon: FC<IDragonProps> = ({ tale }) => {
	return (
		<div className="dragon">
			<div className="dragon_hero">
				<Clouds />
				<div className="hero_back" />
			</div>
			<div className="dragonTaleContainer">
				{
					tale.content.map((item) => {
						switch (item.type) {
							case 'title':
								return (<TaleTitle className={item.className} options={item.options} text={item.text} />);
							case 'text':
								return (<TaleText className={item.className} options={item.options} text={item.text} />);
							case 'image':
								return (<TaleImage className={item.className} options={item.options} text={item.text} />);
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

export default Dragon;