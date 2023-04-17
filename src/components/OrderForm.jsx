import React, { useState } from "react";
import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Popover from "react-bootstrap/Popover";
import { CartDataContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const OrderForm = () => {
  const { cart, cartprecioTotal, clearCart } = useContext(CartDataContext);
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [address, SetAddress] = useState("");
  const [lastName, SetLastName] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [showPopover, setShowPopover] = useState(true);
  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmarEmail) {
      setShowPopover(false);
      return;
    } else if (email === "" || confirmarEmail === "") {
      setShowPopover(false);
      return;
    }

    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
    handleShow();
  };

  const order = {
    name,
    email,
    phone,
    lastName,
    address,
    cart: { cart },
    total: cartprecioTotal(),
    date: serverTimestamp(),
  };

  const orderCollection = collection(db, "order");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="fondoOrder"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          style={{ width: "20rem" }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ejemplo@gmail.com"
              onChange={(e) => SetEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
            <Form.Label>Confirmar Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese de nuevo su email"
              onChange={(e) => setConfirmarEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre y apellido:</Form.Label>
            <Form.Control
              type="text"
              placeholder="....Julian"
              onChange={(e) => SetName(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>
      </div>
      <div
        className="fondoOrder"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Form
          style={{ width: "20rem" }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Apellido:</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese su apellido"
              onChange={(e) => SetLastName(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="number"
              placeholder="113456-4232"
              onChange={(e) => SetPhone(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Localidad:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gral San martin"
              onChange={(e) => SetAddress(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Modal
            show={show}
            onHide={() => {
              handleClose();
              clearCart();
            }}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Realizó su compra con éxito</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Total de la compra :<strong>${cartprecioTotal()}</strong>
            </Modal.Body>
            <Modal.Body>
              Orden  :<strong>{orderId}</strong>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={() => {
                  handleClose();
                  clearCart();
                }}
                as={Link}
                to="/"
              >
                Volver al Catálogo
              </Button>
            </Modal.Footer>
          </Modal>
          <Popover show={showPopover} placement="bottom">
            <Popover.Body>
              Los datos ingreasados no son correctos, por favor vuelva a ingresarlos.
            </Popover.Body>
          </Popover>
          <br />
          <Button variant="success" type="submit">
            Continuar con la compra
          </Button>
          <br />
          <br />
          <br />
          <br />
        </Form>
      </div>
    </>
  );
};

export default OrderForm;
