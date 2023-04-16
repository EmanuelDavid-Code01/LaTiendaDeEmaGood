import React, { useState } from 'react';
import {collection,addDoc, getFirestore, serverTimestamp} from "firebase/firestore"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Popover from 'react-bootstrap/Popover';
import { CartDataContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const OrderForm = () => {
  const {cart, cartprecioTotal, clearCart} = useContext(CartDataContext);
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [name , SetName] = useState ("");
  const [email , SetEmail] = useState ("");
  const [phone , SetPhone] = useState ("");
  const [address , SetAddress] = useState ("");
  const [lastName , SetLastName] = useState ("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [showPopover, setShowPopover] = useState(true);
  const db = getFirestore();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (email !== confirmarEmail) {
      setShowPopover(false);
      return;
    }
    else if (email === '' || confirmarEmail === '') {
      setShowPopover(false);
      return;
    }

    addDoc(orderCollection, order).then (({id})=>setOrderId(id));
    handleShow();
  };

  const order={
    name,
    email,
    phone,
    lastName,
    address,
    cart:({cart}),
    total:cartprecioTotal(),
    date:serverTimestamp(),
  };

const orderCollection=collection(db, "order");
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



  return (
    <>
    <div className = "fondoOrder" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form style={{width:'20rem',}} onSubmit={(e) => {
  handleSubmit(e);
}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="ingrese su email" onChange={(e)=>SetEmail(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
            <Form.Label>Confirmar Email:</Form.Label>
            <Form.Control type="email" placeholder="Ingrese de nuevo su email" onChange={(e) => setConfirmarEmail(e.target.value)} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" placeholder="ingrese su nombre" onChange={(e)=>SetName(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type="text" placeholder="ingrese su apellido" onChange={(e)=>SetLastName(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Telefono:</Form.Label>
        <Form.Control type="number" placeholder="ingrese su telefono" onChange={(e)=>SetPhone(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Direccion:</Form.Label>
        <Form.Control type="text" placeholder="ingrese su direccion" onChange={(e)=>SetAddress(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Modal show={show} onHide={() => {
  handleClose();
  clearCart();
}} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Compra Confirmada</Modal.Title>
        </Modal.Header>
        <Modal.Body>El total de su compra es :<strong>${cartprecioTotal()}</strong>
        </Modal.Body>
        <Modal.Body>El ID de su compra es:<strong>{orderId}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={() => {
  handleClose();
  clearCart();
}} as={Link} to="/">
            Volver al Catalogo
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="outline-primary" type="submit" >
        Comprar
      </Button>

      <Popover show={showPopover}  placement="bottom">
        <Popover.Body>
          Los E-mails no coinciden o no se ingreso ningun E-mail.
        </Popover.Body>
      </Popover>
    </Form>
    </div>
    </>
  )
}

export default OrderForm