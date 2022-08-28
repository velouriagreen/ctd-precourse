import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';



import Characters from './Characters';
import Character from './Character';
//import Planet from './Planet';
import Films from './Films';


interface Props {

}

const App: React.FC<Props> = () => {


  return (
    <div>
      <h1 className='welcome'>Welcome to the Star Fleet!</h1>
      {/* <h2>Here you'll find a list of Star Wars characters and some of their information.</h2> */}

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/films" element={<Films />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </div>
  );
};



export default App;