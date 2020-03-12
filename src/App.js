import React from 'react';
import './App.css';
import Profile from './Profile';
import Resume from './Resume';
import {BrowserRouter,Route} from 'react-router-dom';


let App=()=>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={Profile}></Route>
      <Route exact path="/resume" component={Resume}/>
    </BrowserRouter>
  )
}

export default App;