import { FC } from 'react';
import './About.scss';

interface IAboutProps {
	title: string;
	description: string;
	descriptionPS: string;
}

const About: FC<IAboutProps> = ({ description, title, descriptionPS }) => {
	return (
		<div className="about">
			<div className="about__wrapper">
				<div className="about__container">
					<div className="about__title">{title}</div>
					<div className="about__description">{description}</div>
					<div className="about__descriptionPS">{descriptionPS}</div>
					<div className="about__frame" />
				</div>
			</div>
		</div>
	);
};

export default About;
