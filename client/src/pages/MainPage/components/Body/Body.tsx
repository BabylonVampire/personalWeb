import { FC } from 'react';
import "./Body.scss";
import Item from './components/Item/Item';
import { ITaleProps } from '../../../../components/Tale/ITaleProps.interface';

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
