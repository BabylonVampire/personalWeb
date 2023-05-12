import { FC, useEffect } from 'react';
import './About.scss';
import { spawnBugs } from 'fairy-anims/src';

interface IAboutProps {
	title: string;
	description: string;
}

const About: FC<IAboutProps> = ({ description, title }) => {

	useEffect(() => {
		spawnBugs(50, 'about__bug__container')
	}, [])

	return (
		<div className='about'>
			<div className="about__bug__container" />
			<div className="about__wrapper">
				<div className="about__container">
					<div className="about__title">
						{title}
					</div>
					<div className="about__description">
						{description}
					</div>
					<div className="about__frame" />
				</div>
			</div>
		</div>
	)
};

export default About;
