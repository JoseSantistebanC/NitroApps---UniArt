import React, {useState, useEffect, useMemo} from "react";
import { Usuario } from "../../models/usuario";
import { Artista } from "../../models/artista";
import { CreateArtista } from "../../api/apiArtista";
//import { CreateU } from "../../api/apiUsuario";


interface userLog {
  token: string,
  user: Usuario|Artista,
}
interface userOpts {
  user: Usuario|Artista,
  loadingUser:boolean,
  signup:(usuario:Usuario|Artista)=>void,
  login:(username:string, password:string)=>void,
  logout:()=>void,
}

const UserContext = React.createContext<userOpts|null>(null);

export function UserProvider(props:any) {
  const [user,setUser] = React.useState<Usuario|Artista>();
  const [loadingUser,setLoadingUser] = React.useState(true);
  
  const uaux:Usuario = { //borrar[
    id: 0,
    nombre_usuario: "Context_uwu",
    password: "WHYYYY",
    email: "context@upc.edu.pe",
    nombre: "Context",
    apellido: "UwU",
    ciudad_id: 5,
    url_foto_perfil: "",
    fecha_registro: new Date(),
  };  //]borrar
  
  React.useEffect(() => {
    async function loadUser() {
      //token para comprobar la app
      //if (!getToken()) { setLoadingUser(false); return; }

      try {
        // apiArtista/ api.... deberia enviar algun token en lugar de id
        // y devolverme el usuario o artista correspondiente
        //setUser(uaux);
        setLoadingUser(false);
      } catch (error) {
        console.log(error);
      }
    }
    loadUser();
    
  }, [])

  async function login(username:string, password:string){
    //Recibir los datos del usuario enviandole email password
    //funcion login en user y artista
    const data:userLog = {token:"", user: new Usuario()};
    setUser(data.user);//apiArtista. post?
    //setToken(data.token)
  }
  async function signup(usuario:Usuario|Artista, isArtist?:boolean){
    const data:userLog = {token:"", user: usuario};
    if (isArtist) {
      CreateArtista(usuario as Artista);
    } else {
      //CreateUsuario(usuario as Usuario);
    }
    setUser(data.user);//apiArtista. post?
    //setToken(data.token)
  }
  function logout(){
    setUser(undefined);
    //deleteToken();
  }

  const value = useMemo(() => {
    return ({
      user,
      loadingUser,
      signup,
      login,
      logout
    });
  },[user,loadingUser]);

  return <UserContext.Provider value={value} {...props}/>
}

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("Usuario context debe estar dentro del proveedor Usuario Context");
    //console.log()
  }
  return context; 
}

