import axios, { AxiosResponse } from "axios"
import { ITaleResponse } from "../../types/ITaleResponse.interface";

export const getTale = async (title: string): Promise<ITaleResponse> => {
	const response: AxiosResponse<ITaleResponse> = await axios.get<ITaleResponse>(`http://localhost:5000/api/tales/${title}`)
	return response.data;
}
