import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './stores/configure_store';
import App from './app';
import routes from './routes';
import {loadCourses} from './actions/course_actions';

const store = configureStore();
store.dispatch(loadCourses())

render(
  <Provider store={store}>
    <App children={routes} />
  </Provider>, 
  document.getElementById('root')
);
