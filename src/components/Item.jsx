import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Item = ({ id, precio, category,image, title, oferta }) => {
  const descuento = precio / 2;

  return (
    <>
      <Card
        className="text-center"
        border="success"
        style={{ width: "18rem", margin: "3rem", paddingTop: "1rem" }}
        key={id}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Categoría: {category}</ListGroup.Item>
            <ListGroup.Item>
              {oferta ? (
                <>
                  Precio: <del>${precio}</del> <Badge bg="success">Oferta</Badge>{" "}
                  <strong>${descuento}</strong>
                </>
              ) : (
                <>
                  Precio: <strong>${precio}</strong>
                </>
              )}
            </ListGroup.Item>
          </ListGroup>
          <Link to={`/itemdetail/${id}`}>
            <Button variant="success"> Detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
