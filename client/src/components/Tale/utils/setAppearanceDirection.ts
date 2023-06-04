import { ITaleComponentsOptions } from '../../../types/TaleComponents.interfaces';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/src/ScrollTrigger';

const setAppearanceDirection = (
	className: string,
	options: ITaleComponentsOptions
) => {
	gsap.registerPlugin(ScrollTrigger);
	switch (options.appearanceDirection) {
		case 'left':
			gsap.fromTo(
				`.${className}`,
				{ x: -100, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 0.5,
					yoyo: true,
					scrollTrigger: {
						start: '-600',
						trigger: `.${className}`,
						toggleActions: 'play none none reverse',
					},
				}
			);
			break;

		case 'right':
			gsap.fromTo(
				`.${className}`,
				{ x: 100, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 0.5,
					yoyo: true,
					scrollTrigger: {
						start: '-600',
						trigger: `.${className}`,
						toggleActions: 'play none none reverse',
					},
				}
			);
			break;

		case 'top':
			gsap.fromTo(
				`.${className}`,
				{ y: 100, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					yoyo: true,
					scrollTrigger: {
						start: '-500',
						trigger: `.${className}`,
						toggleActions: 'play none none reverse',
					},
				}
			);
			break;

		case 'bottom':
			gsap.fromTo(
				`.${className}`,
				{ y: -100, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					yoyo: true,
					scrollTrigger: {
						start: '-600',
						trigger: `.${className}`,
						toggleActions: 'play none none reverse',
					},
				}
			);
			break;

		default:
			console.error(
				"[!] Invalid 'appearanceDirection' value! Use only 'left', 'right', 'top', 'bottom'"
			);
			break;
	}
};

export default setAppearanceDirection;
