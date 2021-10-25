import './index.css';
import App from './App';
import Information from '../src/Information'
import MainAttraction from '../src/MainAttraction'
import Attractions from '../src/Attractions'
import CityPhotos from '../src/CityPhotos'
import React from 'react';
import ReactDOM from 'react-dom';
import { NotFound } from './NotFound';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
const _history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={_history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/info" component={Information}/>
      <Route path="/MainAttraction" component={MainAttraction}/>
      <Route path="/Attractions" component={Attractions}/>
      <Route path="/CityPhotos" component={CityPhotos}/>
      <Route component={NotFound} />
    </Switch>
  </ BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
