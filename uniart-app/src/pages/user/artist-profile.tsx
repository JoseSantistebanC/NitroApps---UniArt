import React from 'react';
import { Avatar, Button, Container, Divider, FormControl, Grid, InputLabel, ListItem, ListItemIcon, ListItemText,
  MenuItem,
  Pagination,
  Paper, Rating, Select, SelectChangeEvent, Typography } from '@mui/material';
import { themeMui, blacks, whites } from '../../themes/theme-mui';
import { Artista } from '../../models/artista';
import { RedSocial } from '../../models/red_social';
import { Tema } from '../../models/tema';
import { Servicio } from '../../models/servicio';
import ServiceCards from '../../components/card-custom/service-cards';
import { Review } from '../../models/review';
import ReviewCards from '../../components/card-custom/review-cards';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import Footer from '../../components/dashboard/footer';
//import Box from '@mui/material/Box';

function ArtistProfile(props:{artista?:Artista}) {

  const isUserProfile = props.artista === undefined? true:false;

  let artist:Artista = props.artista === undefined? new Artista() : props.artista;
  artist.nombre_usuario = "Prueba Artista";
  artist.ciudad_id = 1;
  artist.rating = 4;
  artist.descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore, sed do eiusmod tempor.";
  //console.log(artist.fecha_registro.toString());
  
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

  let auxS: Servicio = new Servicio();
  auxS.nombre = "Dibujos de anime";
  auxS.duracion_esperada.days = 2;
  auxS.precio_base = 10;
  let top_services = [auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS,auxS];

  let auxR: Review = {
    id: 1,
    rating_cliente: 2,
    comentario: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ",
    "dolore eu fugiat nulla pariatur."].join(''),
    fecha: new Date(),
    valor_Positivo: 10,
    valor_Negativo: 1,
    url_img_referencia: `${process.env.PUBLIC_URL}/images/bgs/PortadaBg.svg`,
  }
  let top_reviews = [auxR,auxR,auxR,auxR,auxR,auxR,auxR,auxR,auxR,auxR,auxR,auxR];


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
      backgroundImage: `url("${process.env.PUBLIC_URL}/images/bgs/portada.png")`,
      backgroundAttachment: "fixed",
      height: "12em",
    }}></Container>
    
    <Grid container spacing={2} sx={{padding:"1em 2em", alignItems: "flex-start", }}>
      <Grid item xs={3}>
        <Paper sx={{ backgroundColor: "transparent", textAlign: "left",
          marginTop: "-1rem", padding:"0.5rem",}}>
            
          <Grid container spacing={2} >
            <Grid item xs={5} >
              <Avatar alt={artist.nombre_usuario} sx={{
                width: "7rem", height:"7rem",
                marginTop: "-2em",
                }}/>
            </Grid>
            <Grid item xs={7}>
              <Grid container spacing={1} >
                <Grid item xs={12}>
                  <Typography variant="h4">{artist.nombre_usuario}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Rating value={artist.rating} readOnly/>
                  {artist.rating} ({artist.q_valoraciones})
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} >
              <Typography component="p">{artist.descripcion}</Typography>
              <br/>
                  <ListItem>
                    <ListItemIcon><RoomIcon color="secondary"/></ListItemIcon>
                    <ListItemText primary={artist.ciudad_id} />
                  </ListItem>
                  <br/>
              <Typography component="p">
                Se unió en {artist.fecha_registro.toLocaleDateString()}
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

          <Grid item xs={8}>
            <strong>Servicios</strong>
          </Grid>
          <Grid item xs={4} sx={{display: "flex", justifyContent: "flex-end",}}>
            <FormControl variant="standard" >
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
            <ServiceCards list={top_services} min={0} max={20}/>
          </Grid>

          <Grid item xs={12}> <Divider/>  </Grid>

          <Grid container className="filter-up">
            <ListItem>
              <ListItemText><strong>Reseñas como vendedor</strong></ListItemText>
              <StarIcon color="info"/>{artist.rating} ({artist.q_valoraciones})
            </ListItem>

            <FormControl variant="standard" >
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
            <ReviewCards list={top_reviews} min={0} max={10}/>
            <br/><br/>
            <Pagination count={10} showFirstButton showLastButton />
          </Grid>

        </Grid>
      </Grid>
    </Grid>
    
    <Footer />
    </>
  );
};

export default ArtistProfile;
