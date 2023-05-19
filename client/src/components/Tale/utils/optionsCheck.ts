import { ITaleComponentsOptions } from "../TaleComponents.interfaces";

const optionsCheck = (options: ITaleComponentsOptions) => {
	if (options) {
		if (options.appearanceDirection === undefined || options.position === undefined) {
			console.error("[!] Invalid 'options' value. Fill all the fields correct!")
			return;
		}
	}
}

export default optionsCheck;