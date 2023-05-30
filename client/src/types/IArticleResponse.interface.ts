import { ITaleProps } from "./ITaleProps.interface";

export interface ITaleResponse {
	id: number,
	title: string,
	description: string,
	content: ITaleProps,
}