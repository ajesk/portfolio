import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logger from 'simple-console-logger';
import {Button, ButtonGroup, Image, Row, Col, Panel} from 'react-bootstrap'
Logger.configure({level: 'debug'});

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      projects: [
        {name: "iTrain", detail: "train"},
        {name: "This Website", detail: "this"},
        {name: "Another Project", detail: "what"},
        {name: "Sudoku", detail: "solver"}
      ]
    };
  }
  
  projectSelect(key) {
    this.setState({selected: key});
  }

  projectButtons() {
    return (
      <Col xs={2}>
        <ButtonGroup vertical>
          {this.state.projects.map((project, i) => {
            return (<Button key={i} onClick={() => this.projectSelect(i)}>{project.name}</ Button>);
          })}
        </ButtonGroup>
      </ Col>
    );    
  }

  projectImage(path) {
    <Col xs={6} md={4}>
      <Image src="" rounded circle />
    </Col>
  }

  projectDetail() {
    const selected = this.state.selected;
    return (
      <Col xs={9}>
        {this.projectImage()}
        {this.state.projects[selected].detail}
      </ Col>
    )
  }

  render() {
    return (
        <Row>
          <Col xsOffset={1} xs={10}>
            <Panel>
              <Panel.Heading>Projects</ Panel.Heading>
              <Panel.Body>
                {this.projectButtons()}
                {this.projectDetail()}
              </ Panel.Body>
            </ Panel>
          </ Col>
        </ Row>
    );
  }
}

export default Projects;
