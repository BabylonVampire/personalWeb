import { FC, useEffect } from 'react'
import { ITaleTextComponentsProps } from '../../../types/TaleComponents.interfaces';
import setMargin from '../utils/setMargin';
import setAppearanceDirection from '../utils/setAppearanceDirection';
import optionsCheck from '../utils/optionsCheck';
import './TaleTitle.scss';


const TaleTitle: FC<ITaleTextComponentsProps> = ({ text, className, options }) => {
	optionsCheck(options);

	useEffect(() => {
		setAppearanceDirection(className, options);
	}, [className, options])
	
	const margin = setMargin(options.position);


	return (
		<div className={`tale_title ${className}`} style={{ margin: margin }}>
			{text}
		</div>
	)
}

export default TaleTitle;