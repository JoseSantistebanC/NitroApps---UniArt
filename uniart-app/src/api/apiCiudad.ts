import { Ciudad } from "../models/ciudad";
import request from './api';

const apiCiudad = {
	list: () => request.get<Ciudad[]>("/Ciudad"),
	add: (data: Ciudad) => request.post("/Ciudad", data),
	edit: (data: Ciudad) => request.put(`/Ciudad/${data.id}`, data),
	delete: (id: number) => request.delete(`/Ciudad/${id}`),
	detail: (id: string) => request.get<Ciudad>(`/Ciudad/${id}`),
};

export default apiCiudad;