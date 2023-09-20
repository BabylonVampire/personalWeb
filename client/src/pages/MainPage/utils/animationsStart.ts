import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const animationsStart = () => {
	const items = gsap.utils.toArray<HTMLElement>('.item__container');
	const images = gsap.utils.toArray<HTMLElement>('.item__image');
	const images_back = gsap.utils.toArray<HTMLElement>(
		'.text__backgroundWrapper__image'
	);
	const text_content = gsap.utils.toArray<HTMLElement>('.text__content');

	gsap.registerPlugin(ScrollTrigger);
	gsap.fromTo(
		'.Head',
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: '.Head',
				start: 'center',
				end: 'bottom',
				scrub: true,
			},
		}
	);

	items.forEach((item) => {
		gsap.fromTo(
			item,
			{
				opacity: 0,
				x: (+item.id.slice(-1) % 2 === 0 ? 1 : -1) * 40,
				y: 30,
			},
			{
				opacity: 1,
				x: 0,
				y: 0,
				scrollTrigger: {
					start: '-500',
					end: '-300',
					trigger: item,
					scrub: true,
				},
			}
		);
	});

	images.forEach((image) => {
		gsap.fromTo(
			image,
			{ top: '-3em' },
			{
				top: '1.5em',
				scrollTrigger: {
					start: '-200',
					end: 'bottom',
					trigger: image,
					scrub: true,
				},
			}
		);
	});

	images_back.forEach((image) => {
		gsap.fromTo(
			image,
			{
				right: `${(+image.id.slice(-1) % 2 === 0 ? 1 : -1) * 100}vw`,
				opacity: 0.5,
			},
			{
				right: '0',
				opacity: 1,
				duration: 1,
				yoyo: true,
				scrollTrigger: {
					start: '-400',
					trigger: image,
					toggleActions: 'play none none reverse',
				},
			}
		);
	});

	text_content.forEach((content) => {
		gsap.fromTo(
			content,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.2,
				yoyo: true,
				scrollTrigger: {
					start: '-450',
					trigger: content,
					toggleActions: 'play none none reverse',
				},
			}
		);
	});
};
