import React, { FC } from 'react';
import './BreakingLines.scss';

interface IBreakingLinesProps {
	text: string;
}

const BreakingLines: FC<IBreakingLinesProps> = ({ text }) => {
	const textToWords = (text: string) => {
		return text.split(' ');
	};
	const breakLine = () => {};

	const words = textToWords(text);

	return (
		<div className="breakingLines">
			{words.map((word) => {
				return <div className="word">{word}</div>;
			})}
		</div>
	);
};

export default BreakingLines;
