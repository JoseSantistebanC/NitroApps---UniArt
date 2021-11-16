import React, { useState } from 'react';
import { Artista } from "../models/artista";
import request from './api';

const apiArtista = {
	list: () => request.get<Artista[]>("/Artista"),
	add: (data: Artista) => request.post("/Artista", data),
	edit: (data: Artista) => request.put(`/Artista/${data.id}`, data),
	delete: (id: number) => request.delete(`/Artista/${id}`),
	detail: (id: number) => request.get<Artista>(`/Artista/${id}`),
};
export default apiArtista;

//READ LIST 
export const ListArtistas = (from?:number,to?:number) => {
	if (from === undefined) from = 0;
  const [artistas, setArtistas] = React.useState<Artista[]>([]);
	function refreshArtistas(){
    apiArtista.list().then((res) => {
      to===undefined ? setArtistas(res.slice(from,res.length))
			:setArtistas(res.slice(from,to));
			console.log('l artistas:',res);
    });
  }
	return {artistas,refreshArtistas};
};

//READ ONE (DETAILS)
export const GetArtista = (id:number) => {
	const [artista, setArtista] = React.useState<Artista>(new Artista);
	function refreshArtista(){
		apiArtista.detail(id).then((res)=>{
			setArtista(res);
			console.log('i artista:',res);
		}).catch( ()=>{"no listó artista"} );
	}
	return {artista,refreshArtista};
};

//CREATE
export const CreateArtista = (artista:Artista) => {
	apiArtista.add(artista).then(()=>{
	}).catch( ()=>{console.log("no creó artista")} );
};

//UPDATE
export const UpdateArtista = (artista:Artista) => {
	apiArtista.edit(artista).then(()=>{
	}).catch( ()=>{console.log("no actualizó artista");} );
};

//DELETE
export const DeleteArtista = (id:number) => {
	apiArtista.delete(id).then(()=>{
	}).catch( ()=>{"no eliminó artista"} );
};

