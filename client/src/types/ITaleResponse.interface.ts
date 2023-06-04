export interface ITaleContent {
	index: number;
	id: string;
	taleId: string;
	contentBlocks: {
		index: number;
		className: string;
		type: string;
		text: string;
		image: string;
		options: {
			appearanceDirection: string;
			position: string;
		};
	}[];
}

export interface ITaleResponse {
	id: string;

	name: string;
	link: string;
	title: string;
	description: string;

	descriptionPreview: string;
	image: string;
	backImage: string;

	content: ITaleContent;
}
