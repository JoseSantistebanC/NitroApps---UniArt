import { Artista } from "../models/artista";
import request from './api';

const apiArtista = {
	list: () => request.get<Artista[]>("/Artista"),
	add: (data: Artista) => request.post("/Artista", data),
	edit: (data: Artista) => request.put(`/Artista/${data.id}`, data),
	delete: (id: number) => request.delete(`/Artista/${id}`),
	detail: (id: string) => request.get<Artista>(`/Artista/${id}`),
};

export default apiArtista;