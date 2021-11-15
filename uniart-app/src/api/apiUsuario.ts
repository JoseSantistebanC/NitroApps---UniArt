import { Artista } from "../models/artista";
import request from './api';

const apiUsuario = {
	list: () => request.get<Artista[]>("/usuario"),
	add: (data: Artista) => request.post("/usuario", data),
	edit: (data: Artista) => request.put(`/usuario/${data.id}`, data),
	delete: (id: number) => request.delete(`/usuario/${id}`),
	detail: (id: string) => request.get<Artista>(`/usuario/${id}`),
};

export default apiUsuario;