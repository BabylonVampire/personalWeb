import { FC, useEffect } from 'react'
import { ITaleComponentsProps } from '../../../types/TaleComponents.interfaces';
import setAppearanceDirection from '../utils/setAppearanceDirection';
import optionsCheck from '../utils/optionsCheck';
import setMargin from '../utils/setMargin';
import './TaleImage.scss';

const TaleImage: FC<ITaleComponentsProps> = ({ text, className, options }) => {

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
				backgroundImage: `url(${text})` 
			}}
		/>
	)
}

export default TaleImage;