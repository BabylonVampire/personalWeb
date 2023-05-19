import { gsap } from 'gsap/src';
import { ScrollTrigger } from 'gsap/src/ScrollTrigger';
import { FC, useEffect } from 'react'
import { ITaleComponentsProps } from '../TaleComponents.interfaces';
import './TaleText.scss';

const TaleText: FC<ITaleComponentsProps> = ({ text, className, options }) => {
	if (options) {

	}

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		switch (options.appearanceDirection) {
			case 'left':
				gsap.fromTo(`.${className}`, { x: -100, opacity: 0 }, {
					x: 0,
					opacity: 1,
					duration: 0.5,
					yoyo: true,
					scrollTrigger: {
						start: '-600',
						trigger: `.${className}`,
						toggleActions: 'play none none reverse'
					}
				})
				break;

			case 'right':
				gsap.fromTo(`.${className}`, { x: 100, opacity: 0 }, {
					x: 0,
					opacity: 1,
					duration: 0.5,
					yoyo: true,
					scrollTrigger: {
						start: '-600',
						trigger: `.${className}`,
						toggleActions: 'play none none reverse'
					}
				})
				break;

			case 'top':
				gsap.fromTo(`.${className}`, { y: 100, opacity: 0 }, {
					y: 0,
					opacity: 1,
					duration: 0.5,
					yoyo: true,
					scrollTrigger: {
						start: '-600',
						trigger: `.${className}`,
						toggleActions: 'play none none reverse'
					}
				})
				break;

			case 'bottom':
				gsap.fromTo(`.${className}`, { y: -100, opacity: 0 }, {
					y: 0,
					opacity: 1,
					duration: 0.5,
					yoyo: true,
					scrollTrigger: {
						start: '-600',
						trigger: `.${className}`,
						toggleActions: 'play none none reverse'
					}
				})
				break;

			default:
				console.error("[!] Invalid 'appearanceDirection' value! Use only 'left', 'right', 'top', 'bottom'")
				break;
		}
	}, [])

	let margin: string;
	switch (options.position) {
		case 'right':
			margin = '0 2em 0 auto'; // отступ справа
			break;
		case 'left':
			margin = '0 auto 0 2em'; // отступ слева
			break;
		case 'center':
			margin = '0 auto'; // отступ с обеих сторон
			break;
		default:
			return null;
	}


	return (
		<div className={`tale_text ${className}`} style={{ margin: margin }}>
			{text}
		</div>
	)
}

export default TaleText;