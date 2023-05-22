import { ITaleComponentsOptions } from "./TaleComponents.interfaces";

export interface ITalePreview {
	title: string;
	description: string;
	image: string;
	backImage: string;
}

export interface ITaleProps {
	preview: ITalePreview;
	name: string;
	link: string;
	content: ITalePropsContent[];
}

export interface ITalePropsContent {
	className: string;
	options: ITaleComponentsOptions;
	type: string;
	text: string;
	image: string;
}