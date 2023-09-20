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

const Item: FC<IItemProps> = ({
	title,
	description,
	image,
	backImage,
	index,
	link,
}) => {
	const [itemImageClassName, setItemImageClassName] =
		useState(`item__container`);

	const handleZoomIn = () => {
		setItemImageClassName(`item__container zoom_in`);
		setTimeout(() => {
			setItemImageClassName(`item__container`);
		}, 1000);
	};

	const navigate = useNavigate();

	return (
		<div
			className="item"
			style={{ flexDirection: index % 2 === 1 ? 'row' : 'row-reverse' }}
		>
			<div className="text__backgroundWrapper">
				<div
					className="text__backgroundWrapper__image"
					id={`text__backgroundWrapper__image${index}`}
					style={{
						backgroundImage: `url(${
							import.meta.env.VITE_STATIC_URL
						}/${backImage})`,
					}}
				/>
			</div>
			<Link to="/">
				<div
					className={itemImageClassName}
					id={`item__image__${index}`}
					onClick={() => {
						handleZoomIn();
						const el = document.getElementById('scene_manager');
						el?.classList.add('blackout');
						setTimeout(() => {
							navigate(link);
							el?.classList.remove('blackout');
						}, 1000);
					}}
				>
					<div
						className="item__image"
						style={{
							backgroundImage: `url(${
								import.meta.env.VITE_STATIC_URL
							}/${image})`,
						}}
					/>
				</div>
			</Link>
			<div className="text__container">
				<div className="text__content">
					<div className="item__title">{title}</div>
					<div className="item__description">{description}</div>
				</div>
				<div className="text__frame" />
			</div>
		</div>
	);
};

export default Item;
