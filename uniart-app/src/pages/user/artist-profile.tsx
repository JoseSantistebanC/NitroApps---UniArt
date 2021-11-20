import React from 'react';
import { Avatar, Divider,
  Container, Grid, Paper,
  FormControl, InputLabel, Button,
  Select, SelectChangeEvent, 
  ListItem, ListItemIcon, ListItemText,
  MenuItem, Rating, Typography, ButtonBase, Link } from '@mui/material';
import { blacks } from '../../themes/theme-mui';
import { Artista } from '../../models/artista';
import { RedSocial } from '../../models/red_social';
import { Tema } from '../../models/tema';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Footer from '../../components/dashboard/footer';
import ServiceCards from '../../components/card-custom/service-cards';
import ReviewCardsConn from '../../api-conn/review-cards-conn';
import { useUser } from '../session/userContext';
import { useParams } from 'react-router';
import apiArtista, { GetArtista } from '../../api/apiArtista';
//import Box from '@mui/material/Box';



function ArtistProfile(props:any) { //{artist:Artista}

  let auxartist:Artista = new Artista();
  auxartist.nombre_usuario = "";
  auxartist.ciudad_id = 1;
  auxartist.rating = 4;
  auxartist.descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore, sed do eiusmod tempor.";
  auxartist.fecha_registro = new Date();
  //console.log(artist.fecha_registro.toString());

  let {username} = useParams(); //cambia el username del router en path... :username
  const today = new Date();
  const {user} = useUser();
  //const {artista,refreshArtista} = GetArtista(username===undefined?45:+username);
  const [artista, setArtista] = React.useState<Artista>(auxartist);  
  
  React.useEffect(()=>{
    //en getArtista debería enviar username
    //alert(artista.nombre_usuario);
    apiArtista.detail(username===undefined?4:+username).then((res)=>{
      setArtista(res);
    }).catch( ()=>{"no mostró artista"} );
  },[artista.nombre_usuario === ""]);
  React.useEffect(()=>{
    console.log('art...',artista);
    setArtista(artista);
  },[JSON.stringify(artista)]);



  const isOwner = (user === undefined || user === null?
                false : (user.nombre_usuario === artista.nombre_usuario?
                true : false));
  
  let temas: Tema[] = [
    {id: 0, nombre: "Concept Art"},
    {id: 0, nombre: "Fondos"},
    {id: 0, nombre: "Personakes"},
  ];

  let redesSociales:RedSocial[] = [
    {id: 0, nombre: "Facebook", link:"..."},
    {id: 1, nombre: "Instagram", link:"..."},
    {id: 2, nombre: "Twitter", link:"..."},
  ];

  
  const [orderbyS, setOrderbyS] = React.useState('1');
  const handleChangeOBS = (event: SelectChangeEvent) => {
    setOrderbyS(event.target.value);
  };
  const [orderbyR, setOrderbyR] = React.useState('1');
  const handleChangeOBR = (event: SelectChangeEvent) => {
    setOrderbyR(event.target.value);
  };
  
  return (
    <>
    <Container sx={{
      backgroundColor: blacks.main,
      backgroundImage: `url("${artista.url_foto_portada}")`,
      backgroundAttachment: "fixed",
      height: "12em",
    }}></Container>
    
    <Grid container spacing={2} sx={{padding:"1em 2em", alignItems: "flex-start", }}>
      <Grid item xs={3}>
        <Paper sx={{ backgroundColor: "transparent", textAlign: "left",
          marginTop: "-1rem", padding:"0.5rem",}}>
            
          <Grid container spacing={2} >
            <Grid item xs={5} >
              <Avatar alt={artista.nombre_usuario}
              src={artista.url_foto_perfil}
              sx={{ width: "7rem", height:"7rem",
                marginTop: "-2em", }}/>
            </Grid>
            <Grid item xs={7}>
              <Grid container spacing={1} >
                <Grid item xs={12}>
                  <Typography variant="h4">{artista.nombre_usuario}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Rating value={artista.rating} readOnly/>
                  {artista.rating} ({artista.q_valoraciones})
                  
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} >
              <Typography component="p">{artista.descripcion}</Typography>
              <br/>
                  <ListItem>
                    <ListItemIcon><RoomIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={artista.ciudad_id} />
                  </ListItem>
                  <br/>
              <Typography component="p">
                Se unió en {
                  artista.fecha_registro === undefined? today.toLocaleDateString() 
                  : artista.fecha_registro.toLocaleDateString()
                }
              </Typography>

              <br/> <Divider/> <br/>

              <Typography component="p" style={{marginBottom: "0.5em"}}>
                <strong>Servicios</strong>
              </Typography>
              <ListItem>
                <ListItemText>En Oferta</ListItemText>
                <ListItemIcon>0</ListItemIcon>
              </ListItem>
              { temas.map((t)=>{
                return (
                  <ListItem>
                    <ListItemText>{t.nombre}</ListItemText>
                    <ListItemIcon>0</ListItemIcon>
                  </ListItem>
                );
              }) }
                
              <br/> <Divider/> <br/>

              <Grid item xs={12}>
                <Button variant="outlined" color="secondary">Ver políticas generales del servicio</Button>
                <Button variant="outlined" color="secondary">Ver preguntas frecuentes</Button>
              </Grid>

              </Grid>

          </Grid>
        </Paper>
        
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={2} sx={{padding:"1em 2em"}}>

          <Grid item xs={6}>
            <strong>Servicios</strong>
          </Grid>
          <Grid item xs={3}>
            <Link href="/new-service" underline="none">
              <Button variant="contained" endIcon={<AddCircleIcon/>}>
                Publicar
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3} sx={{display: "flex", justifyContent: "flex-end",}}>
            <FormControl >
              <InputLabel id="order-by-label">Ordenar por</InputLabel>
              <Select labelId="order-by-label" id="order-by" 
                value={orderbyS} onChange={handleChangeOBS} label="Más recientes" >
                <MenuItem value={"1"}>Más recientes</MenuItem>
                <MenuItem value={"2"}>Más antiguos</MenuItem>
                <MenuItem value={"3"}>Más económicos</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <ServiceCards/>
          </Grid>

          <Grid item xs={12}> <Divider/>  </Grid>

          <Grid container className="filter-up">
            <ListItem>
              <ListItemText><strong>Reseñas como vendedor</strong></ListItemText>
              <StarIcon color="info"/>{artista.rating} ({artista.q_valoraciones})
            </ListItem>

            <FormControl >
              <InputLabel id="order-by-label">Ordenar por</InputLabel>
              <Select labelId="order-by-label" id="order-by" 
                value={orderbyR} onChange={handleChangeOBR} label="Más recientes" >
                <MenuItem value={"3"}>Más relevantes</MenuItem>
                <MenuItem value={"1"}>Más recientes</MenuItem>
                <MenuItem value={"2"}>Más antiguos</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <ReviewCardsConn/>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
    
    <Footer />
    </>
  );
};

export default ArtistProfile;
