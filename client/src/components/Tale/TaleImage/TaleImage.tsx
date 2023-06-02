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
	}, [className, options])
	
	const margin = setMargin(options.position);

	return (
		<div
			className={`tale_image ${className}`}
			style={{ 
				margin: margin,
				backgroundImage: `url(${import.meta.env.VITE_STATIC_URL}/${image})` 
			}}
		/>
	)
}

export default TaleImage;