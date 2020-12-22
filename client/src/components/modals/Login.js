import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const sendForm = (e)=> {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
}


const Login = (props) => {
  return (
    <Form inline onSubmit= {sendForm}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Login;