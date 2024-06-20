import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowLists from './Components/RowLists/RowLists';



function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowLists/>
    </div>
  );
}

export default App;
