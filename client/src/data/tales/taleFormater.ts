import { ITaleProps } from "../../types/ITaleProps.interface";
import { ITaleResponse } from "../../types/ITaleResponse.interface";

export const formatTale = async (tale: Promise<ITaleResponse>) => {

	const jsonTale = tale.then((result) => {
		const newTale: ITaleProps = {
			preview: result.content.content.preview,
			link: result.link,
			name: result.name,
			content: result.content.content.content,
		}
		return newTale
	})

	return jsonTale;
}

