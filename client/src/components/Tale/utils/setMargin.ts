const setMargin = (position: string) => {
	let margin: string;
	switch (position) {
		case 'right':
			margin = '0 2em 0 auto'; // отступ справа
			break;
		case 'left':
			margin = '0 auto 0 2em'; // отступ слева
			break;
		case 'center':
			margin = '0 auto'; // отступ с обеих сторон
			break;
		default:
			return undefined;
	}
	return margin;
}

export default setMargin;