import { FC } from 'react';
import './Head.scss';

interface IHeadProps {
	title: string;
}

const Head: FC<IHeadProps> = ({ title }) => {
	return (
		<div className="Head">
			<div className="layer title">
				<p>{title}</p>
			</div>
			<div className="layer layer__bottom" />
			<div className="layer layer__middle" />
			<div className="layer layer__top" />
		</div>
	);
};

export default Head;
