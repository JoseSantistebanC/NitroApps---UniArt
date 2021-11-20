import React, { useState } from 'react';
import { Artista } from "../models/artista";
import request from './api';

const apiUsuario = {
	list: () => request.get<Artista[]>("/usuario"),
	add: (data: Artista) => request.post("/usuario", data),
	edit: (data: Artista) => request.put(`/usuario/${data.id}`, data),
	delete: (id: number) => request.delete(`/usuario/${id}`),
	detail: (id: number) => request.get<Artista>(`/usuario/${id}`),
};

export default apiUsuario;

//READ LIST 
export const ListUsuarios = (from?: number, to?: number) => {
	if (from === undefined) from = 0;
	const [users, setUsuarios] = React.useState<Artista[]>([]);
	function refreshUsuarios() {
		apiUsuario.list().then((res) => {
			to === undefined ? setUsuarios(res.slice(from, res.length))
				: setUsuarios(res.slice(from, to));
			console.log('l users:', res);
		});
	}
	return { users, refreshUsuarios };
};

//READ ONE (DETAILS)
export const GetUsuario = (id: number) => {
	const [user, setUsuario] = React.useState<Artista>(new Artista);
	function refreshUsuario() {
		apiUsuario.detail(id).then((res) => {
			setUsuario(res);
			console.log('i user:', res);
		}).catch(() => { "no listó user" });
	}
	return { user, refreshUsuario };
};

//CREATE
export const CreateUsuario = (user: Artista) => {
	apiUsuario.add(user).then(() => {
	}).catch(() => { console.log("no creó user") });
};

//UPDATE
export const UpdateUsuario = (user: Artista) => {
	apiUsuario.edit(user).then(() => {
	}).catch(() => { console.log("no actualizó user"); });
};

//DELETE
export const DeleteUsuario = (id: number) => {
	apiUsuario.delete(id).then(() => {
	}).catch(() => { "no eliminó user" });
};