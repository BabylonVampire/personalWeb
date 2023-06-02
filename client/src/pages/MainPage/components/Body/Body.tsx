import { FC } from 'react';
import "./Body.scss";
import Item from './components/Item/Item';
import { ITaleResponse } from '../../../../types/ITaleResponse.interface';

interface IBodyProps {
	gallery_items: ITaleResponse[]
}

const Body: FC<IBodyProps> = ({ gallery_items }) => {

	return (
		<div className='body'>
			<div className="gallery">
				{
					gallery_items.map((item) => {
						return (
							<Item
								key={`item_${gallery_items.indexOf(item)}_${item.link}`}
								link={item.link}
								title={item.title}
								description={item.descriptionPreview}
								image={item.image}
								backImage={item.backImage}
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
