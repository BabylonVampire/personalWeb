import { FC, useEffect } from 'react';
import { taleContentRender } from '../utils/taleContentRender';
import './Waste.scss';
import Dunes from './components/Dunes/Dunes';
import Sun from './components/Sun/Sun';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import setSky from 'fairy-anims/src/Stars';
import { IOptions } from 'fairy-anims/src/Stars/stars-options.interface';
import { ITaleResponse } from '../../types/ITaleResponse.interface';

interface IWasteProps {
	tale: ITaleResponse;
}

const Waste: FC<IWasteProps> = ({ tale }) => {
	useEffect(() => {
		const options: IOptions = {
			starsColor: '#fff',
			starsSizeRange: [1, 3],
			starsShiningSpeedRange: [5000, 8000],
		};
		setSky(50, 'waste__hero__back__box__slider', options);

		gsap.registerPlugin(ScrollTrigger);
		gsap.fromTo(
			'.waste__hero__back__box__slider',
			{ width: '0%' },
			{
				width: '100%',
				scrollTrigger: {
					trigger: '.waste',
					start: '300vh',
					end: '2100vh',
					scrub: true,
				},
			}
		);

		gsap.fromTo(
			'.sun',
			{ top: '70vh', left: '10vw', backgroundColor: 'rgb(223 42 42)' },
			{
				backgroundColor: 'rgb(253, 237, 107)',
				top: '20vh',
				left: '90vw',
				scrollTrigger: {
					trigger: '.waste',
					start: 'top',
					end: '2100vh',
					scrub: true,
				},
			}
		);

		gsap.fromTo(
			'.waste__hero__back',
			{ backgroundColor: '#9f3463' },
			{
				backgroundColor: '#6e9dcb',
				scrollTrigger: {
					trigger: '.waste',
					start: 'top',
					end: '2100vh',
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div className="waste">
			<div className="waste__hero">
				<div className="waste__hero__back" />
				<div className="waste__hero__back__box">
					<div className="waste__hero__starBox" />
					<Sun />
					<Dunes />
					<div className="waste__hero__back__box__slider" />
				</div>
			</div>
			<div className="waste__container">
				{taleContentRender(tale)}
				<div className="waste__epilogue" />
			</div>
		</div>
	);
};

export default Waste;
