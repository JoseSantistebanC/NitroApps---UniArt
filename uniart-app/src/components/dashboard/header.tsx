import React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import Link from '@mui/material/Link';
import { IconButton, Menu, MenuItem, Avatar, Link, Toolbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ExploreTTIcon from '@mui/icons-material/ExploreTwoTone';
import ChatBubbleTTIcon from '@mui/icons-material/ChatBubbleTwoTone';
import AssessmentTTIcon from '@mui/icons-material/AssessmentTwoTone';
import ShoppingCartTTIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Login from '@mui/icons-material/Login';
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

interface LinkTabProps {
  value?: number;
  label?: string;
  href: string; 
  icon?: string | React.ReactElement<any,string> | undefined;
};

const tabItems: Array<LinkTabProps> = [
  { label:"Explorar", href:"/explore", icon:<ExploreTTIcon /> },
  { label:"Chat", href:"/chat", icon:<ChatBubbleTTIcon /> },
  { label:"Comisiones", href:"/commissions", icon:<AssessmentTTIcon /> },
  { label:"Compras", href:"/cart", icon:<ShoppingCartTTIcon /> },
];

const userMenuItems: Array<LinkTabProps> = [
  { label:"Iniciar sesion", href:"/login", icon:<Login fontSize="small" />  },
  { label:"Crear cuenta", href:"/signin", icon:<PersonAdd fontSize="small" /> },
  { label:"Perfil", href:"/artist-profile", icon:<AccountCircle fontSize="small" /> },
  { label:"Configuración", href:"/settings", icon:<Settings fontSize="small" />  },
  { label:"Cerrar Sesión", href:"/logout", icon:<Logout fontSize="small" />  },
];

const Header = (props:Usuario) => {
  let nomusu = props.id === 0? "Desconocido" : props.nombre_usuario;
  const navi = useNavigate();

  const checkTab = () => { //__dirname
    for (let i = 0; i < tabItems.length; i++) {
      if (tabItems[i].href === window.location.pathname) {return i;}
    }
    for (let i = 0; i < userMenuItems.length; i++) {
      if (userMenuItems[i].href === window.location.pathname) {
        return tabItems.length+1;
      }
    }
    return -1;
  };
  
  const [value, setValue] = React.useState(checkTab);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
  const menuPaperProps = {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  };

  /* <Toolbar variant="dense" sx={{padding:"0px",}}> */

  return (
    <AppBar position="fixed">
      <Toolbar>
      <Link href="/"><img src={process.env.PUBLIC_URL + '/images/logo.svg'}
            style={{height:'2rem',}} alt="logo"/></Link>
      <Autocomplete freeSolo id="search" style={{ flexGrow: 1, }}
          value = "" 
          options={top100.map((option) => option.title)}
          renderInput={(params) =>
            <TextField {...params} label="Nombre del servicio o artista" variant="standard" />}  
          />
      <IconButton type="submit" aria-label="search" sx={{ height: 'fit-content', }}> <SearchIcon /> </IconButton>

        <Tabs value={value} onChange={handleChange} scrollButtons={false}
          sx={{
            '& .MuiTabs-flexContainer': {
              alignItems: "center", width:'100%',
              columnGap: "0.5rem", rowGap: "0.5rem", 
            }
          }}>

          {tabItems.map((t,i)=>{
            return (
              <Tab component="a" value={i}
              label={t.label?t.label:''} href={t.href}
              icon={t.icon?t.icon:''}
              onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
                navi(t.href, { replace: true });
              }} />
            );
          })}

          <Tab label={nomusu} onClick={handleProfileMenuOpen}
          icon={<Avatar alt={nomusu} sx={{ width: '1.5rem', height: '1.5rem'}}/>}
          aria-controls={menuId} aria-haspopup="true" value={5} />
          <Menu id={menuId} anchorEl={anchorEl} keepMounted PaperProps={menuPaperProps}
          anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
          transformOrigin={{ vertical: 'top', horizontal: 'right', }}
          open={isMenuOpen} onClose={handleMenuClose} >
          {userMenuItems.map( (umi,i)=>{return(
            <Link href={umi.href} underline={'none'}>
              <MenuItem onClick={handleMenuClose}>
                {umi.icon} {umi.label}
              </MenuItem>
            </Link>
          )} )}
          </Menu>

        </Tabs>
        </Toolbar>
    </AppBar>
  );
};


export default Header;