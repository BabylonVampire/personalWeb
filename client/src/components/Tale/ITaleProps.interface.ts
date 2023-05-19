import { ITaleComponentsOptions } from "./TaleComponents.interfaces";

export interface ITaleProps {
	preview: {
		title: string;
		description: string;
		image: string;
		backImage: string;
	}
	name: string;
	link: string;
	content: ITalePropsContent[]
}

export interface ITalePropsContent {
	className: string,
	options: ITaleComponentsOptions,
	type: string,
	text: string,
	image: string,
}