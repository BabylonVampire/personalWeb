import { FC, useEffect } from 'react';
import { ITaleTextComponentsProps } from '../../../types/TaleComponents.interfaces';
import optionsCheck from '../utils/optionsCheck';
import setAppearanceDirection from '../utils/setAppearanceDirection';
import setMargin from '../utils/setMargin';
import './TaleText.scss';

const TaleText: FC<ITaleTextComponentsProps> = ({
	text,
	className,
	options,
}) => {
	optionsCheck(options);

	useEffect(() => {
		setAppearanceDirection(className, options);
	}, [className, options]);

	const margin = setMargin(options.position);

	return (
		<div className={`tale_text ${className}`} style={{ margin: margin }}>
			{text}
		</div>
	);
};

export default TaleText;
