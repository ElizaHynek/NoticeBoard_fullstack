import React from 'react';
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../config";


const AdFormEdit = ({ action, actionText, ...props }) => {

	const navigate = useNavigate();
	const { id } = useParams();

	const [title, setTitle] = useState(props.title || '');
  const [content, setContent] = useState(props.content || '');
  const [price, setPrice] = useState(props.price || '')
  const [publishDate, setPublishDate ] = useState(new Date());
  const [location, setLocation] = useState(props.location || '');
  const [image, setImage] = useState(props.photo || null);
  const [status, setStatus] = useState(null);
 
	
  const handleSubmit = e => {
		e.preventDefault();

		const fd = new FormData();
    fd.append('title', title);
    fd.append('content', content);
    fd.append('price', price);
    fd.append('location', location);
    fd.append('image', image);
    fd.append('publishDate', publishDate);

    const options = {
      method: 'PUT',
      credentials: 'include',
      body: fd,
    };

    setStatus('loading');

    fetch(`${API_URL}/ads/${id}`, options)
    .then(res => {
      if(res.status === 201){
        setStatus('success');
        navigate("/");
      } else if(res.status === 400){
        setStatus('clientError');
      } else if(res.status === 401){
        setStatus('loginError');
      } else{
        setStatus('serverError');
      }
    })
    .catch(err => {
      console.log(err);
      setStatus('serverError');
    });
  }

  return (
		<div style={{ width: '70%' }} className="m-auto" >
			
			<Form onSubmit={handleSubmit}>

				{status === 'success' && (
					<Alert variant="success">
						<Alert.Heading>Success!</Alert.Heading>
						<p>Your announcement has been successfully added!</p>
					</Alert>
				)}

				{status === 'clientError' && (
					<Alert variant="danger">
						<Alert.Heading>Not enough data or data are incorrect</Alert.Heading>
						<p>You have to fill all the fields. Photo has to be one of this type of file: *.jpg, *.jpeg, *.gif, *.png.</p>
					</Alert>
				)}

				{status === 'serverError' && (
					<Alert variant="danger">
						<Alert.Heading>Something went wrong...</Alert.Heading>
						<p>Unexpected error... Try again!</p>
					</Alert>
				)}

				<Form.Group className="mb-3" controlId="formTitle">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPassword">
					<Form.Label>Content if the ad</Form.Label>
					<Form.Control type="text" as="textarea" rows={5} value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />      
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPrice">
					<Form.Label>Price</Form.Label>
					<Form.Control type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />      
				</Form.Group>

				<Form.Group className="mb-3" controlId="formDate">
					<Form.Label>Date</Form.Label>
					<Form.Control type="date" value={publishDate} onChange={e => setPublishDate(e.target.value)} placeholder="Enter date" />      
				</Form.Group>

				<Form.Group className="mb-3" controlId="formLocation">
					<Form.Label>Location</Form.Label>
					<Form.Control type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />      
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPhoto">
					<Form.Label>Image</Form.Label>
					<Form.Control type="file" onChange={e => setImage(e.target.files[0])} />      
				</Form.Group>

				<Button variant="warning" type="submit">Submit</Button>
			</Form>
		</div>
  )
};

export default AdFormEdit;