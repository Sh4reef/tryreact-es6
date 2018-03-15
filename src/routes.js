import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import AboutPage from './components/about/about_page';
import CoursePage from './components/course/courses_page';
import HomePage from './components/home/home_page';
import PageNotFound from './components/common/404_page';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/courses" component={CoursePage} />
    <Route component={PageNotFound} />
  </Switch>
);