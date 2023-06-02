import axios, { AxiosResponse } from "axios"
import { ITaleResponse } from "../../types/ITaleResponse.interface";

export const getTale = async (title: string): Promise<ITaleResponse> => {
	const response: AxiosResponse<ITaleResponse> = await axios.get<ITaleResponse>(`${import.meta.env.VITE_API_URL}/tales/${title}`)
	return response.data;
}
