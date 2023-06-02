import axios, { AxiosResponse } from "axios"
import { ITaleResponse } from "../../types/ITaleResponse.interface";

export const getTales = async (): Promise<ITaleResponse[]> => {
	const { data }: AxiosResponse<ITaleResponse[]> = await axios.get<ITaleResponse[]>(`http://localhost:5000/api/tales/`)
	return data;
}