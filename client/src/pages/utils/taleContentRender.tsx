import TaleImage from '../../components/Tale/TaleImage/TaleImage';
import TaleText from '../../components/Tale/TaleText/TaleText';
import TaleTitle from '../../components/Tale/TaleTitle/TaleTitle';
import { ITaleResponse } from '../../types/ITaleResponse.interface';

export const taleContentRender = (tale: ITaleResponse) => {
	const content = tale.content.contentBlocks.sort(
		(a, b) => a.index - b.index
	);

	return content.map((item) => {
		switch (item.type) {
			case 'title':
				return (
					<TaleTitle
						className={item.className}
						options={item.options}
						text={item.text}
					/>
				);
			case 'text':
				return (
					<TaleText
						className={item.className}
						options={item.options}
						text={item.text}
					/>
				);
			case 'image':
				return (
					<TaleImage
						className={item.className}
						options={item.options}
						image={item.image}
					/>
				);
			default:
				console.error(
					"[!] Invalid 'type' value, use only 'title', 'text', 'image'"
				);
				return null;
		}
	});
};
