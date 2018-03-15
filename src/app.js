import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/common/header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          {this.props.children}
        </div>
      </Router>
    )
  }
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;