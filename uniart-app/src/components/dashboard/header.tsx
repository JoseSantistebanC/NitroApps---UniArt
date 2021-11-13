import React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import Link from '@mui/material/Link';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExploreTTIcon from '@mui/icons-material/ExploreTwoTone';
import ChatBubbleTTIcon from '@mui/icons-material/ChatBubbleTwoTone';
import AssessmentTTIcon from '@mui/icons-material/AssessmentTwoTone';
import ShoppingCartTTIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Usuario } from '../../models/usuario';

const top100 = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
];

//function
const Header = (props:Usuario) => {
  let nomusu = props.id === 0? "Desconocido" : props.nombre_usuario;

  const navi = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface LinkTabProps {
    label?: string;
    href: string; //?
    icon?: string | React.ReactElement<any,string> | undefined;
  };
  
  function LinkTab(props: LinkTabProps) {
    return (
      <Tab component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          navi(props.href, { replace: true });
        }} {...props} />
    );
  }

  /* <Toolbar variant="dense" sx={{padding:"0px",}}> */

  return (
    <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange} scrollButtons={false}
          sx={{
            '& .MuiTabs-flexContainer': {
              alignItems: "center", width:'100%',
              columnGap: "0.5rem", rowGap: "0.5rem", 
            }
          }}>
          <LinkTab href="/" icon={
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'}
            style={{height:'2rem',}} alt="logo"/>
          }/>

          <Autocomplete freeSolo id="search" style={{ flexGrow: 1, }}
          value = "" 
          options={top100.map((option) => option.title)}
          renderInput={(params) =>
            <TextField {...params} label="Nombre del servicio o artista" variant="standard" />}  
          />
          <IconButton type="submit" aria-label="search" sx={{ height: 'fit-content', }}> <SearchIcon /> </IconButton>

          <LinkTab label="Explorar" href="/explore" icon={<ExploreTTIcon />}/>
          <LinkTab label="Chat" href="/chat" icon={<ChatBubbleTTIcon />}/>
          <LinkTab label="Comisiones" href="/commissions" icon={<AssessmentTTIcon />}/>
          <LinkTab label="Compras" href="/cart" icon={<ShoppingCartTTIcon />}/>

          <LinkTab label={nomusu} href="/settings" icon={<AccountCircle />}/>
        </Tabs>
    </AppBar>
  );
};


export default Header;