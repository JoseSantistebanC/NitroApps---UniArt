import React, {useState} from 'react';
import request from './api';
import { Servicio } from '../models/servicio';
import { ExpandOutlined } from '@mui/icons-material';
import { serializeStyles } from '@emotion/serialize';

const apiServicio={
    list: () => request.get<Servicio[]>("/Servicio"),
    add: (data: Servicio) => request.post("/Servicio",data),
    edit: (data: Servicio)=> request.put('/Servicio/${data.id}',data),
    delete: (id: number)=> request.delete('/Servicio/${id}'),
    detail: (id: number)=>request.get<Servicio>('/Servicio/${id}'),
};
export default apiServicio;

//READ LIST
export const ListServicios=(from?:number,to?:number)=>{
    if(from===undefined) from=0;
    const [servicio, setServicio] = React.useState<Servicio[]>([]);
    function refreshServicio(){
        apiServicio.list().then((res)=>{
            to===undefined?setServicio(res.slice(from,res.length))
            :setServicio(res.slice(from,to));
            console.log('l servicio:', res);
        });
    }
    return {servicio, refreshServicio};
};

//READ ONE 
export const GetServicio = (id: number)=>{
    const [servicio, setServicio] = React.useState<Servicio>(new Servicio);
    function refreshServicio(){
        apiServicio.detail(id).then((res)=>{
            setServicio(res);
            console.log('i servicio:',res);
        }).catch(()=>{"no listó Servicio"});
    }
    return {servicio, refreshServicio};
};

//CREATE
export const CreateServicio=(servicio:Servicio)=>{
    apiServicio.add(servicio).then(()=>{    
    }).catch(()=>{console.log("no creó servicio")});
};

//UPDATE
export const UpdateServicio = (servicio:Servicio)=>{
    apiServicio.edit(servicio).then(()=>{
    }).catch(()=>{console.log("no actualizó servicio");});
};

//DELETE
export const DeleteServicio=(id:number)=>{
    apiServicio.delete(id).then(()=>{
    }).catch(()=>{"no eliminó servicio"});
};