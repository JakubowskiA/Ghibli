import React, {Component} from 'react';
import { Form } from 'semantic-ui-react'
import './App.css';


class MovieForm extends Component {
    state={
        title:"",
        year:"",
        description:""
    }
    handleChangeTitle = event =>{
        this.setState({title:event.target.value})
    }
    handleChangeReleaseYear = event =>{
        this.setState({year:event.target.value})
    }
    handleChangeDescription = event =>{
        this.setState({description:event.target.value})
    }


  render(){

  return (
    <div>
    <h1>Add a movie</h1>
    <Form onSubmit={() => this.props.handleSubmit(this.state)}>
      <Form.Group widths="equal">
        <Form.Input fluid label="Title" placeholder="Title" name="Title" onChange={this.handleChangeTitle} value={this.state.title}/>
        <Form.Input fluid label="ReleaseYear" placeholder="ReleaseYear" name="ReleaseYear" onChange={this.handleChangeReleaseYear} value={this.state.year}/>
        <Form.Input fluid label="Description" placeholder="Description" name="Description" onChange={this.handleChangeDescription} value={this.state.description}/>
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  </div>
  )
}}

export default MovieForm;
