/* eslint-disable */

import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {

  let [fade, setFade] = useState("");

  useEffect(() => {
		setTimeout(() => { setFade("end") }, 100)
		return () => { setFade("") }
	}, [])

  return (
    <div className={'login-width start ' + fade} >
    <h1 className="login-title">FASHIWEB</h1>
    <h2>Welcome</h2>
    <Form>
      <Form.Group className="mb-3 login-subtitle" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="email" placeholder="Enter ID" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3 login-subtitle" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Form.Text className="text-muted">
          Not registered? Create a New Account!
      </Form.Text><br/><br/>
      <Button style={{marginRight: "10px"}} variant="outline-dark" type="submit" onClick={()  => {
        axios
      }}>
        Login
      </Button>
      <Button variant="dark" type="submit" onClick={()  => {
        axios
      }}>
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Login;