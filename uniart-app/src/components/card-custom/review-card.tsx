import React from 'react';
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, ListItem, ListItemIcon, ListItemText, Typography }
  from '@mui/material';
import { themeMui, blacks, whites } from '../../themes/theme-mui';
import { Review } from '../../models/review';
import { Usuario } from '../../models/usuario';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import ThumbUpOlIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOlIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpFrIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownFrIcon from '@mui/icons-material/ThumbDownAltRounded';
import { datediff } from '../utils/datediff';


function ReviewCard(props:{review:Review, usuario?:Usuario}) {
  const review:Review = props.review === undefined ? {
    id: 1,
    rating_cliente: 2,
    comentario: "Genia!!!",
    fecha: new Date(),
    valor_Positivo: 10,
    valor_Negativo: 1,
    url_img_referencia: `${process.env.PUBLIC_URL}/images/bgs/PortadaBg.svg`,
  } : props.review;

  let user: Usuario = props.usuario === undefined? new Usuario() : props.usuario;
  user.nombre_usuario = "Usuario Prueba";

  const questions = [
    {nq: 1, answer: "Respuesta 1"},
    {nq: 2, answer: "Respuesta 2"},
    {nq: 3, answer: "Respuesta 3"},
  ];

  const since = datediff(review.fecha);

  const [like, setLike] = React.useState<string>('');
  const handleChangeL = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked){ setLike(''); }
    else { setLike(event.target.value) };
  };

  const controlProps = (item: string) => ({
    checked: like === item,
    onChange: handleChangeL,
    value: item,
    name: 'valoracion',
    inputProps: { 'aria-label': item },
  });

  return (
    <Card sx={{ display: "flex" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ListItem>
                <ListItemIcon>
                  <Avatar sx={{ bgcolor: themeMui.palette.secondary.main, width: 24, height: 24 }}
                  alt="Usuario" src={user.url_foto_perfil}  />
                </ListItemIcon>
                <ListItemText primary={ <Typography variant="h5"> {user.nombre_usuario} </Typography>}/>
                <ListItemIcon> <StarIcon color="info"/>  </ListItemIcon>
                <ListItemText primary={"*/-"}/>
              </ListItem>
            </Grid>
            <Grid item xs={6} sx={{ color: blacks.light, fontSize: "0.9em", }}>
              Hace {since} | {user.ciudad_id}
            </Grid>
          </Grid>

          {questions.map((q,i)=>{ return (
            <ListItem>
              <ListItemIcon><strong>Pregunta {i+1}</strong></ListItemIcon>
              <ListItemText primary={q.answer}/>
            </ListItem>
          )})}

          <Typography component="p">
            {review.comentario}
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Checkbox {...controlProps('1')}
              icon={<ThumbUpOlIcon/>} checkedIcon={<ThumbUpFrIcon/>} />
            </Grid>
            <Grid item xs={2}>
              <Checkbox {...controlProps('-1')}
              icon={<ThumbDownOlIcon/>} checkedIcon={<ThumbDownFrIcon/>} />
            </Grid>
          </Grid>

        </CardContent>
        <CardMedia component="img"  style={{width:"33%",}}
          image={review.url_img_referencia} alt="portada" />
    </Card>
  );
};

export default ReviewCard;
