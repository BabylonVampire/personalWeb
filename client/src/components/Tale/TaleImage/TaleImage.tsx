import { FC, useEffect } from 'react'
import setAppearanceDirection from '../utils/setAppearanceDirection';
import optionsCheck from '../utils/optionsCheck';
import setMargin from '../utils/setMargin';
import './TaleImage.scss';
import { ITaleImageComponentsProps } from '../../../types/TaleComponents.interfaces';

const TaleImage: FC<ITaleImageComponentsProps> = ({ image, className, options }) => {

	optionsCheck(options);

	useEffect(() => {
		setAppearanceDirection(className, options);
	}, [])
	
	let margin = setMargin(options.position);

	return (
		<div
			className={`tale_image ${className}`}
			style={{ 
				margin: margin,
				backgroundImage: `url(${image})` 
			}}
		/>
	)
}

export default TaleImage;