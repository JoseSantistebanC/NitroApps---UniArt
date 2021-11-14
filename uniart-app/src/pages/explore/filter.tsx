import React from 'react';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { whites } from '../../themes/theme-mui';
import DoubleRangeSlider from '../../components/form/double-range-slider';
import CheckParentAll from '../../components/form/check-all-group';
import StarIcon from '@mui/icons-material/Star';

function Filter() {
  const [orderby, setOrderby] = React.useState('');
  const handleChangeOB = (event: SelectChangeEvent) => {
    setOrderby(event.target.value);
  };

  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const handleChangeA =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [checked, setChecked] = React.useState([true, true]);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const colores = [
    {id: 0, nombre:"Boceto"},
    {id: 1, nombre:"Lineart"},
    {id: 5, nombre:"Escala de grises"},
    {id: 8, nombre:"Colores planos"},
  ];

  return (
    <Drawer variant="permanent" sx={{ flexShrink: 0,
      [`& .MuiDrawer-paper`]: { backgroundColor: whites.main } }}>
      <Typography variant="h4">Ilustraciones</Typography>
      <br/>
      
      <FormControl>
        <InputLabel id="order-by-label">Ordenar por</InputLabel>
        <Select labelId="order-by-label" id="order-by"
          value={orderby} onChange={handleChangeOB} label="Más recientes" >
          <MenuItem value={10}>Más recientes</MenuItem>
          <MenuItem value={20}>Más antiguos</MenuItem>
          <MenuItem value={30}>Más económicos</MenuItem>
        </Select>
      </FormControl>
      <br/>
      
      <Accordion disableGutters  expanded={expanded === 'panel1'} onChange={handleChangeA('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content" id="panel1a-header" >
          <Typography>Sobre la ilustración</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography component="strong">Tema</Typography>
          <CheckParentAll id="Tema" list={[
            {id:0, nombre:"Concept Art"},
            {id:1, nombre:"Fondo"}
          ]} />

          <Typography component="strong">Estilo</Typography>
          <CheckParentAll id="Estilo" list={[
            {id:0, nombre:"Fondo"},
            {id:2, nombre:"GIF"}
          ]} /> 

          <Typography component="strong">Colores</Typography>
          <CheckParentAll id="Colores" list={colores} />
          </AccordionDetails>
          
        </Accordion>


        <Accordion disableGutters  expanded={expanded === 'panel2'} onChange={handleChangeA('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content" id="panel1a-header" >
              <Typography>Sobre el vendedor</Typography>
          </AccordionSummary>
          <AccordionDetails> 

            <Typography component="strong">Pais</Typography>
            <CheckParentAll id="Pais" list={[
              {id:0, nombre:"Perú"},
              {id:1, nombre:"Mexico"},
              {id:2, nombre:"Argentina"}
            ]} /> 
            
            <ListItem>
              <ListItemIcon><StarIcon color="info"/></ListItemIcon>
              <ListItemText><strong>Rating</strong></ListItemText>
            </ListItem>
            <DoubleRangeSlider min={1} max={5} current={[0,5]} step={1} format=""/>

          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters  expanded={expanded === 'panel3'} onChange={handleChangeA('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content" id="panel2a-header" >
              <Typography>Rango de Precio ($)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DoubleRangeSlider min={1} max={1000} current={[0,1000]} format="$/."/>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters  expanded={expanded === 'panel4'} onChange={handleChangeA('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content" id="panel2a-header" >
              <Typography>Rango de Duración</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DoubleRangeSlider min={1} max={1000} current={[0,1000]} format="D"/>
          </AccordionDetails>
        </Accordion>
    </Drawer >
  );
};

export default Filter;
