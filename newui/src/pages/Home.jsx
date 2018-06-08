import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logger from 'simple-console-logger';
import bootstrap, {Col, Row} from 'react-bootstrap'
import Projects from '../components/projects/Projects'

Logger.configure({level: 'debug'});

class Home extends Component {
  static propTypes = {
  };

  projects() {
    return (
      <Row> 
        <Projects />
      </ Row>
    )
  }

  render() {
    return (
      <div className="home">
        {this.projects()}
      </ div>
    );
  }
}

export default Home;
