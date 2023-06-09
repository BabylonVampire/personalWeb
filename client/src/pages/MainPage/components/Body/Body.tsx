import { FC } from 'react';
import './Body.scss';
import Item from './components/Item/Item';
import { ITaleResponse } from '../../../../types/ITaleResponse.interface';

interface IBodyProps {
	gallery_items: ITaleResponse[];
}

const Body: FC<IBodyProps> = ({ gallery_items }) => {
	const noTaleText = 'Истории не найдены';

	if (!gallery_items.length) {
		return (
			<main>
				<div className="noTalesTitle">{noTaleText}</div>
			</main>
		);
	}

	return (
		<main>
			<div className="gallery">
				{gallery_items.map((item) => {
					return (
						<Item
							key={`item_${gallery_items.indexOf(item)}_${
								item.link
							}`}
							link={item.link}
							title={item.name}
							description={item.descriptionPreview}
							image={item.image}
							backImage={item.backImage}
							index={gallery_items.indexOf(item)}
						/>
					);
				})}
			</div>
		</main>
	);
};

export default Body;
