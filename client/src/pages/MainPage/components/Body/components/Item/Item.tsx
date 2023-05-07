import { FC, useState } from 'react';
import './Item.scss';

interface IItemProps {
	title: string;
	description: string;
	image: string;
	backImage: string;
	index: number;
}

const Item: FC<IItemProps> = ({ title, description, image, backImage, index }) => {

	const [className, setClassName] = useState(`item__contaner`);
	const [mouseOver, setMouseOver] = useState(false);

	const handleZoomIn = () => {
		setClassName(`item__contaner zoom_in`)
		setTimeout(() => {
			setClassName(`item__contaner`)
		}, 1000)
	}

	const handleGlowUp = () => {
		setClassName(`item__contaner glow_in`)
	}

	const handleGlowDown = () => {
		setClassName(`item__contaner glow_down`)
	}

	return (
		<div
			className="item"
			style={{ flexDirection: index % 2 === 1 ? "row" : "row-reverse" }}
		>
			<div className="text_contaner_image_contaner">
				<div
					className="imageBehindPolygon"
					id={`imageBehindPolygon${index}`}
					style={{ backgroundImage: `url(${backImage})` }}
				/>
			</div>
			<div
				className={className}
				id={`item_image_${index}`}
				onClick={
					() => {
						handleZoomIn()
						let el = document.getElementById('scene_manager')
						el?.classList.add('blackout');
						setTimeout(() => {
							el?.classList.remove('blackout');
						}, 2000)
					}
				}
				onMouseEnter={
					() => {
						handleGlowUp()
						setMouseOver(true)
					}
				}
				onMouseLeave={
					() => {
						handleGlowDown()
						setMouseOver(false)
					}
				}
				style={{
					filter: `grayscale(${mouseOver ? 0 : 1})`,
					boxShadow: mouseOver ? `0px 0px 16px 14px #fff` : `0px 0px 20px 20px #000`
				}}
			>
				<div
					className="item_image"
					style={{ backgroundImage: `url(${image})` }}
				/>
			</div>
			<div className="text_contaner">
				<div className="text__content">
					<div className="item_title">{title}</div>
					<div className="item_description">{description}</div>
				</div>
			</div>
		</div >
	);
}

export default Item;