import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';
import App from './App';
import NewsList from './components/news_list';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Switch só renderiza o primeiro route que encontrar. Assim, tem que colocar as rotas mais especificas primeiro e a home por ultimo

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={NewsList} />
        </Switch>
      </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));

