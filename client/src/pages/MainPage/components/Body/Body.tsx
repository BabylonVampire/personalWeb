import { FC, useEffect } from 'react';
import "./Body.scss";
import "../../../../animations/appiaranceFromCorner/appiaranceFromCorner.scss";
import Item from './components/Item/Item';
import spawnBugs from 'fairy-anims/src/index';

interface IBodyProps {
	gallery_items: {
		preview: {
			title: string;
			description: string;
			image: string;
			backImage: string;
		}
		name: string;
		content: {
			type: string,
			text: string,
			image: string,
		}[]
	}[]
}

const Body: FC<IBodyProps> = ({ gallery_items }) => {

	// useEffect(() => {
	// 	spawnBugs(100, 'body__bug__container')
	// }, [])

	return (
		<div className='body'>
			{/* <div className="body__bug__container"/> */}
			<div className="gallery">
				{
					gallery_items.map((item) => {
						return (
							<Item
								title={item.preview.title}
								description={item.preview.description}
								image={item.preview.image}
								backImage={item.preview.backImage}
								index={gallery_items.indexOf(item)}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export default Body;
