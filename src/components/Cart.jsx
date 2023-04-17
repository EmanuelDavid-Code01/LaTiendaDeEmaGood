import Loader from './Loader';
import { useContext } from 'react';
import {Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartDataContext } from '../context/CartContext';
import OrderForm from './OrderForm';

const Cart = () => {
  const { cart, removeFromCart, cartprecioTotal } = useContext(CartDataContext);
  return (
    <div>
      {cart.length !== 0 ? (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Table responsive hover style={{ boxSizing: 'inherit', textAlign: 'left', marginTop:'3rem' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody style={{ verticalAlign: 'middle' }}>
          {cart.map((ropa) => (
            <tr key={ropa.id}>
              <td>
                <Button variant="outline-danger" onClick={() => removeFromCart (ropa.id)} >
                <span className="material-symbols-outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  delete
                </span>
                </Button>
              </td>
              <td><img src={ropa.image} alt="" style={{ width: '6rem' }} /> </td>
              <td>{ropa.title}</td>
              <td>${ropa.precio}</td>
              <td>{ropa.buyTotal}</td>
              <td>${ropa.buyTotal * ropa.precio}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Table responsive hover style={{width:'36rem'}}>
        <thead >
          <tr >
            <th colSpan={4}>Compras</th>
          </tr>
        </thead>
        <tbody >
          <tr >
          <th>Total</th>
          <td>${cartprecioTotal()}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
      </Table>
      </div>

      <OrderForm/>

      </div>
            ):(
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:'2rem'}}>
                <h3>Carrito vacio</h3>
                <Button variant="outline-primary" size="lg" as={Link} to="/">Ir al Catalogo</Button>
              </div>
            )}
    </div>

  );
};


export default Cart