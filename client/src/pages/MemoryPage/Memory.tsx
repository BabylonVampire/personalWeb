import { useEffect } from 'react';
import './Memory.scss';

const Memory = () => {
	useEffect(() => {}, []);

	const title = 'FAFAFA';

	return (
		<div className="memory">
			<div className="memory__back" />
			<div className="memory__bottom" />
			<div className="memory__title">{title}</div>
		</div>
	);
};

export default Memory;
