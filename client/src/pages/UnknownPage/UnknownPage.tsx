import './UnknownPage.scss';

const UnknownPage = () => {
	const title = 'Неизвестная страница :(';
	const error = '404';

	return (
		<div className="unknownPage">
			<div className="unknownPage__pic" />
			<div className="unknownPage__container">
				<div className="unknownPage__container__title">{title}</div>
				<div className="unknownPage__container__error">{error}</div>
			</div>
		</div>
	);
};

export default UnknownPage;
