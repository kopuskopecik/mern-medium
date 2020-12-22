import React from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const sendForm = async (e)=> {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  const data =  {
    email: e.target[0].value,
    password: e.target[1].value
  }
  const response = await axios.post("/api/login", data);

  console.log(response.data.token);
}


const Login = (props) => {
  return (
    <Form onSubmit= {sendForm}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button className = "mt-2 btn-block btn-small btn-success">Submit</Button>
    </Form>
  );
}

export default Login;