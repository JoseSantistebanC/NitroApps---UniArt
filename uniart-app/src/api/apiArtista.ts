import React, { useState } from 'react'
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

//LIST
export const ListArtistas = () => {
  const [artistas, setArtistas] = React.useState<Artista[]>([]);
	function refreshArtistas(){
    apiArtista.list().then((res) => {
      setArtistas(res);
    });
  }
	return {artistas,refreshArtistas};
};


//CREATE



//UPDATE




//DELETE