import { ITaleComponentsOptions } from '../../../types/TaleComponents.interfaces';

const optionsCheck = (options: ITaleComponentsOptions) => {
	if (!options) return;
	if (
		options.appearanceDirection !== undefined &&
		options.position !== undefined
	)
		return;

	console.error("[!] Invalid 'options' value. Fill all the fields correct!");
};

export default optionsCheck;
