import React, { useState } from 'react';

import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionExplore from './components/SectionExplore';
import SectionView from './components/SectionView';
import Dropdown from './components/Dropdown';

import sliderData from './data/sliderData';
import { exploreData } from './data/exploreData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={sliderData} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SectionExplore {...exploreData} />
      <SectionView />
    </div>
  );
}

export default App;
