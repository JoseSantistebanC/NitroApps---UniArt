import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Button, Grid, Typography,
  Stepper, Step, StepLabel, Container, StepContent, Divider, Link, TextField, FormControlLabel, FormControl, Checkbox, Stack, Autocomplete, InputAdornment, FormHelperText, Input, InputLabel, Select, MenuItem, SelectChangeEvent, Avatar, ListItem, ListItemIcon, ListItemText, Rating } from '@mui/material';
import { Servicio } from '../../models/servicio';
import { Artista } from '../../models/artista';
import { Review } from '../../models/review';
import { GetServicio } from '../../api/apiServicio';
import ReviewCard, { ReviewCardProps } from '../../components/card-custom/review-card';
import { ListComision } from '../../api/apiComision';
import { GetReview, ListReview } from '../../api/apiReview';
import { Usuario } from '../../models/usuario';
import { ListUsuarios } from '../../api/apiUsuario';
import {dateDiff} from '../../utils/dateFx';
import { GetArtista } from '../../api/apiArtista';
import { themeMui } from '../../themes/theme-mui';

interface ServiceProps {
  service: Servicio;
  artista: Artista;
  reviews: ReviewCardProps[];
}

function Service() {
  let {service} = useParams(); //id del servicio
  const [serv, setServ] = useState<ServiceProps>({
    service:new Servicio, artista: new Artista(), reviews: []
  });
  const {comisiones, refreshComisiones} = ListComision();
  const {reviews, refreshReviews} = ListReview();
  const { users, refreshUsuarios } = ListUsuarios();
  const [reviewCards, setReviewCards] = useState<ReviewCardProps>();
  

  const getUserById = (idUser:number) => {
    for (let i = 0; i < users.length; i++) {
      if ( users[i].id === idUser ){ return users[i] }
    }
    return new Usuario();
  };

  const getReviewById = (idReview:number) => {
    for (let i = 0; i < reviews.length; i++) {
      if (idReview === reviews[i].id) {
        return reviews[i];
      }
    }
    return new Review();
  };

  const getReviews = () => {
    let rcs = new Array<ReviewCardProps>();
    //x = x.filter((o, i) => o.props.index != elDel); //index
    const comisionesServ = comisiones.filter((c)=> c.servicio_id === serv.service.id );

    comisionesServ.forEach((c,i)=>{
      //solo review del cliente
      //const {review, refreshReview} = GetReview(c.review_id_clienteid);
      const rev = getReviewById(c.review_id_clienteid);
      const usu = getUserById(c.usuario_id);

      rcs.push({
        id: rev.id,
        user_url_img: usu.url_foto_perfil,
        user_name: usu.nombre_usuario,
        //user_rating: usu.
        // user_qreviews?: number,
        service_time_diff: dateDiff(rev.fecha),
        //user_country?: string,
        // service_details?: {question:string, answer:string}[],
        review: rev.comentario,
        valor_usuario: 0,
        valor_positivo: rev.valor_Positivo,
        valor_negativo: rev.valor_Negativo,
        // url_img?: string
      });
    });
  };

  React.useEffect(() => {
    const {servicio, refreshServicio} = GetServicio(service? +service:0);
    const {artista, refreshArtista} = GetArtista(servicio.artista_id);
    refreshServicio();
    refreshComisiones();
    refreshReviews();

  }, [reviews.length===0])


  return (
    <Grid container>
      <Grid item xs={6}>
        <img src={serv.service.url_imagen} alt="imagen del servicio"/>

        <br/><br/>
        {serv.reviews.map((r)=>{
          return (<ReviewCard {...r} />)
        })}

      </Grid>

      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={6}>
            <ListItem>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: themeMui.palette.primary.main,
                  width: 24, height: 24 }} alt="Foto Artista"
                  src={serv.artista.url_foto_perfil}  />
              </ListItemIcon>
              <ListItemText>
                {serv.artista.nombre_usuario}
              </ListItemText>
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <Rating value={serv.artista.rating} readOnly/>
                  {serv.artista.rating} ({serv.artista.q_valoraciones})
          </Grid>
        </Grid>
        <br/>
        <Typography variant="h3"> {serv.service.nombre} </Typography>
        <br/>
        <Grid container>
          <Grid item xs={6}>{serv.service.precio_base}</Grid>
          <Grid item xs={6}>{serv.service.es_virtual? "Envío digital" : ""}</Grid>
        </Grid>
        <br/>
        <Button>Editar servicio</Button>
        <Button>¡Realizar compra!</Button>
        <br/>
        <ListItem>
          <ListItemIcon>
            Licencia
          </ListItemIcon>
          <ListItemText>
            {serv.service.licencia_id}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            Cantidad de revisiones sin costo adicional
          </ListItemIcon>
          <ListItemText>
            {serv.service.q_revisiones}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            % de delanto
          </ListItemIcon>
          <ListItemText>
            {serv.service.porc_adelanto}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            Cantidad de días base
          </ListItemIcon>
          <ListItemText>
            {serv.service.duracion_esperada} días
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            Reembolsable
          </ListItemIcon>
          <ListItemText>
            {serv.service.acepta_rembolso? "SÍ":"No"}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            Estilo
          </ListItemIcon>
          <ListItemText>
            {serv.service.estilo_id}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            Técnica
          </ListItemIcon>
          <ListItemText>
            {serv.service.tecnica_id}
          </ListItemText>
        </ListItem>


        <div>
          <Typography variant="h5">Acerca del servicio</Typography>
          <p>{serv.service.acerca_servicio}</p>
        </div>
      </Grid>
    </Grid>
  )
}

export default Service
