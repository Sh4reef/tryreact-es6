import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AboutPage from './components/about/about_page';
import CoursePage from './components/course/courses_page';
import HomePage from './components/home/home_page';
import PageNotFound from './components/common/404_page';
import ManageCoursePage from './components/course/manage_course_page';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/courses" component={CoursePage} />
    <Route exact path="/course" component={ManageCoursePage} />
    <Route path="/course/save" render={location => {
      return <Redirect to="/courses" />
    }} />
    <Route path="/course/:id" component={ManageCoursePage} />
    <Route component={PageNotFound} />
  </Switch>
);