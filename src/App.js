import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import { Route, Switch, Redirect } from 'react-router-dom';
import Customers from './components/Customers';
import NavBar from './components/NavBar';
import Rentals from './components/Rentals.jsx';
import NotFound from './components/NotFound';
import MovieForm from './components/MovieForm';
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/movies/:id" component={MovieForm}/>
        <Route path="/movies" component={Movies} />
        <Redirect exact from="/" to="/movies" />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
