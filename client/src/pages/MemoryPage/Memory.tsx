import { useEffect } from 'react';
import './Memory.scss';
import { spawnEyes } from 'fairy-anims/src/Eyes';
import runningText from 'fairy-anims/src/Lines';
import { ILinesOptions } from 'fairy-anims/src/Lines/lines-options.interface';
import { useNavigate } from 'react-router-dom';

const Memory = () => {
	const navigate = useNavigate();
	const title = 'Глубины';
	const options: ILinesOptions = {
		shadow: false,
		repeat: true,
		color: '#fff',
		fontSizeRange: [2, 2],
		speedRange: [3000, 4000],
		lineDirection: 'horizontal',
	};
	useEffect(() => {
		spawnEyes(10, 'memory__eyeBox');
		runningText(
			[
				'Вот она - память',
				'Вот они - мысли, что не дают покоя',
				'Вечно ползущие и щелкающие в голове',
				'Обреченные не быть услышанными елинственным слушателем',
				'Обреченные не быть увиденными единственным зрителем',
				'Всепоглощающая вина',
				'Всепоглощающая апатия',
				'Слова, что должны были быть сказанными, окончательно канут в небытие',
				'Прости меня',
				'Ненавижу вас',
				'За что вы меня предали',
				'Умрите, почему я должен страдать из-за вас',
				'Почему вы так поступаете со мной',
			],
			2,
			'memory__linesBox',
			options
		);
	}, []);
	return (
		<div className="memory">
			<div className="memory__back" />
			<div className="memory__title">{title}</div>
			<div className="memory__linesBox" />
			<div className="memory__eyeBox" />
			<div className="memory__container">
				<div className="memory__container__base" />
				<div
					className="memory__container__figure"
					onClick={() => {
						navigate('/pan');
					}}
				/>
			</div>
		</div>
	);
};

export default Memory;
