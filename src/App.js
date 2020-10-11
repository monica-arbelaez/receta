import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Receta } from '../src/components/Receta'
import './App.css'
export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
            <Switch>
                <Route exact path='/' component = { Receta} />
            </Switch>
        </BrowserRouter>
    
    </div>
  );
}


