import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Pluralsight Administration</h1>
        <hr className="my-4" />
        <p className="lead">
        React, Redux, And React Router with ES6
        </p>
        <p className="lead mb-0">
          <Link 
              className="btn btn-primary btn-md" 
              role="button"
              to="/about" >Learn more</Link>
        </p>
      </div>
    )
  }
}

export default HomePage;