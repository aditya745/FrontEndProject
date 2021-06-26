import { Switch, Route } from 'react-router-dom';
import React from 'react'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Header from './components/Header';

import './App.css';
import {ThemeProvider} from './themes/themes-context';

function App() {

  
  
  return (
    <ThemeProvider>
    <div className="App">
    <Header />
      <div className="container">
          <Switch>
            <Route path='/' exact component={CountriesList} />
            <Route path='/countries/:name' exact component={CountryDetails} />
          </Switch>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
