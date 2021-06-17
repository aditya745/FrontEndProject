import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Header from './components/Header';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route path='/' exact component={Countries} />
            <Route path='/countries/:countryName' exact component={CountryDetails} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
