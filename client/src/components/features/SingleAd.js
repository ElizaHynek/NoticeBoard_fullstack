import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdById, removeAd } from "../../redux/adsRedux";
import { Button, Modal } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";


const SingleAd = () => {

  const { id } = useParams();
  const adData = useSelector(state => getAdById(state, id));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

    
  const dispatch = useDispatch();

  const deleteAd = () => {
    dispatch(removeAd(id));
    handleClose();
  };

  if(!adData) return <Navigate to="/" />
    return (
      <div>
        <div className="d-flex justify-content-between">
          <h2>{adData.title}</h2>
          <div>
            <Link key={id} to={"/ad/edit/" + id}>
              <Button variant="outline-success m-1">Edit ad</Button>
            </Link>
            <Button onClick={handleShow} variant="outline-danger m-1">Delete</Button>
          </div>
        </div>
        <p><b>Location: </b>{adData.location}</p>
        <p>{adData.image}</p>
        <p><b>Price: </b>{adData.price}</p>
        <p>Content: {adData.content}</p>
        <p>Published: {adData.publishDate}</p>
        <p>Seller: {adData.user}</p>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This operation will completely remove this ad from the app. 
              <br/>Are you sure you want to do that?
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">Cancel</Button>
            <Button onClick={deleteAd} variant="danger">Remove</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
};

export default SingleAd;
