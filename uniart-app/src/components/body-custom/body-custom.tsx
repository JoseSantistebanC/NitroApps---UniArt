import React from 'react';
import { Routes, Route } from 'react-router';
import HSCart from '../../pages/cart/cart';
import ChatP from '../../pages/chat/chat';
import Commissions from '../../pages/comissions/in-progress';
import Explore from '../../pages/explore/explore';
import LandingPage from '../../pages/landing/landing-page';
import Settings from '../../pages/user/settings-conn';
import ArtistProfile from '../../pages/user/artist-profile';
import Login from '../../pages/session/login';
import Logout from '../../pages/session/logout';
import Signin from '../../pages/session/signin';
import NewService from '../../pages/service/new-service';
import CRUDprueba from '../../api/probar_apis';

const BodyCustom = () => {
  return (
    <Routes>
      <Route path="/" element={< LandingPage />} />
      <Route path="/explore" element={< Explore />} />
      <Route path="/chat" element={< ChatP />} />
      <Route path="/commissions" element={< Commissions />} />
      <Route path="/cart" element={< HSCart />} />
      <Route path="/login" element={< Login />} />
      <Route path="/signin" element={< Signin />} />
      <Route path="/artist-profile" element={< ArtistProfile />} />
      <Route path="/settings" element={< Settings />} />
      <Route path="/logout" element={< Logout />} />
      <Route path="/new-service" element={< NewService />} />
      <Route path="/crud-prueba" element={<CRUDprueba/>} />
    </Routes>
  );
};

export default BodyCustom;
