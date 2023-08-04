import { Form, Button } from 'react-bootstrap';

const Register = () => {

  return (
    <Form className="col-12 col-sm-3 mx-auto">
      <h1 className='my-4'>Register</h1>
      <Form.Group className='mb-3' controlId='formLogin'>
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formPhone'>
          <Form.Label>Phone numebr</Form.Label>
          <Form.Control type="tel"/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formFile'>
          <Form.Label>Avatar</Form.Label>
          <Form.Control type="file" />
      </Form.Group>
      <Button variant="success" type="submit">Sign up</Button>
    </Form>
  );
};

export default Register;