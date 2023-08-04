import { Form, Button } from 'react-bootstrap';

const Login = () => {

    return (
      <Form className="col-12 col-sm-3 mx-auto">
        <h1 className='my-4'>Log in</h1>
        <Form.Group className='mb-3' controlId='formLogin'>
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"/>
        </Form.Group>
        <Button variant="success" type="submit">Sign in</Button>
      </Form>
    );
  };
  
  export default Login;