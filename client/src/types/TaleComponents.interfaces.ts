export interface ITaleComponentsOptions {
	appearanceDirection: string;
	position: string;
}

export interface ITaleTextComponentsProps {
	text: string;
	className: string;
	options: ITaleComponentsOptions;
}

export interface ITaleImageComponentsProps {
	image: string;
	className: string;
	options: ITaleComponentsOptions;
}