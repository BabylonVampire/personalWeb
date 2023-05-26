import { FC } from 'react';
import "./Body.scss";
import Item from './components/Item/Item';
import { ITaleProps } from '../../../../types/ITaleProps.interface';

interface IBodyProps {
	gallery_items: ITaleProps[]
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
