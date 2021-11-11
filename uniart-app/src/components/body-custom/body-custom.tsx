import React from 'react';
import { Routes, Route } from 'react-router';
import HSCart from '../../pages/cart/cart';
import ChatP from '../../pages/chat/chat';
import Commissions from '../../pages/comissions/in-progress';
import Explore from '../../pages/explore/explore';
import LandingPage from '../../pages/landing/landing-page';
import Settings from '../../pages/settings/settings';
import ArtistProfile from '../../pages/artist-profile/artist-profile';

function BodyCustom() {
  return (
    <Routes>
      <Route path="/" element={< LandingPage />} />
      <Route path="/explore" element={< Explore />} />
      <Route path="/chat" element={< ChatP />} />
      <Route path="/commissions" element={< Commissions />} />
      <Route path="/cart" element={< HSCart />} />
      <Route path="/settings" element={< Settings />} />
      <Route path="/artist-profile" element={< ArtistProfile />} />
    </Routes>
  );
};

export default BodyCustom;
