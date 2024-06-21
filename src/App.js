import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowLists from './Components/RowLists/RowLists';
import { ComedyMovies, HorrorMovies, RomanceMovies, action, originals } from './Constans/Urls';



function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowLists title={'Orginals'} url={originals} />
      <RowLists title={'Action'} url={action} isSmall />
      <RowLists title={'Comedy'} url={ComedyMovies} isSmall />
      <RowLists title={'Horror'} url={HorrorMovies} isSmall />
      <RowLists title={'Romance'} url={RomanceMovies} isSmall />
    </div>
  );
}

export default App;
