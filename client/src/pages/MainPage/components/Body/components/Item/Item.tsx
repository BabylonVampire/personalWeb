import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Item.scss';

interface IItemProps {
	title: string;
	description: string;
	image: string;
	backImage: string;
	index: number;
	link: string;
}

const Item: FC<IItemProps> = ({ title, description, image, backImage, index, link }) => {

	const [itemImageClassName, setItemImageClassName] = useState(`item__container`);
	const [mouseOverItemImage, setMouseOverItemImage] = useState(false);

	const [textContentClassName, setTextContentClassName] = useState(`text__content`);
	const [mouseOverTextContent, setMouseOverTextContent] = useState(false);

	const handleZoomIn = () => {
		setItemImageClassName(`item__container zoom_in`)
		setTimeout(() => {
			setItemImageClassName(`item__container`)
		}, 1000)
	}

	const handleGlowUp = () => {
		setItemImageClassName(`item__container glow_in`)
	}

	const handleGlowDown = () => {
		setItemImageClassName(`item__container glow_down`)
	}

	const handleScrollDown = () => {
		setTextContentClassName(`text__content scrollDown`)
	}

	const handleScrollUp = () => {
		setTextContentClassName(`text__content scrollUp`)
	}

	const navigate = useNavigate();

	return (
		<div
			className="item"
			style={{ flexDirection: index % 2 === 1 ? "row" : "row-reverse" }}
		>
			<div className="text__backgroundWrapper">
				<div
					className="text__backgroundWrapper__image"
					id={`text__backgroundWrapper__image${index}`}
					style={{ backgroundImage: `url(${backImage})` }}
				/>
			</div>
			<Link to="/">
				<div
					className={itemImageClassName}
					id={`item__image__${index}`}
					onClick={
						() => {
							handleZoomIn()
							let el = document.getElementById('scene_manager')
							el?.classList.add('blackout');
							setTimeout(() => {
								navigate(link);
								el?.classList.remove('blackout');
							}, 1000)
						}
					}
					onMouseEnter={
						() => {
							handleGlowUp()
							setMouseOverItemImage(true)
						}
					}
					onMouseLeave={
						() => {
							handleGlowDown()
							setMouseOverItemImage(false)
						}
					}
					style={{
						filter: `grayscale(${mouseOverItemImage ? 0 : 1})`,
						boxShadow: mouseOverItemImage ? `0px 0px 16px 14px #fff` : `0px 0px 20px 20px #000`
					}}
				>
					<div
						className="item__image"
						style={{ backgroundImage: `url(${image})` }}
					/>
				</div>
			</Link>
			<div className="text__container">
				<div
					className={textContentClassName}
					onMouseEnter={
						() => {
							handleScrollDown()
							setMouseOverTextContent(true)
						}
					}
					onMouseLeave={
						() => {
							handleScrollUp()
							setMouseOverTextContent(false)
						}
					}
					style={{
						top: `${mouseOverTextContent ? '-100%' : '0'}`
					}}
				>
					<div className="item__title">{title}</div>
					<div className="item__description">{description}</div>
				</div>
				<div className="text__frame" />
			</div>
		</div >
	);
}

export default Item;