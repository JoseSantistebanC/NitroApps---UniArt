import React, { useState } from 'react'
import { Pais } from "../models/pais";
import request from './api';

const apiPais = {
	list: () => request.get<Pais[]>("/Pais"),
	add: (data: Pais) => request.post("/Pais", data),
	edit: (data: Pais) => request.put(`/Pais/${data.id}`, data),
	delete: (id: number) => request.delete(`/Pais/${id}`),
	detail: (id: string) => request.get<Pais>(`/Pais/${id}`),
};

export default apiPais;

export const ListPaises = () => {
  const [paises, setPaises] = React.useState<Pais[]>([]);
	function refreshPaises(){
    apiPais.list().then((res) => {
      setPaises(res);
    });
  }
	return {paises,refreshPaises};
};
