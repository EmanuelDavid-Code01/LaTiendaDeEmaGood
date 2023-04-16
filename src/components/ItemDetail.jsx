import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

const ItemDetail = ({ data, id }) => {
  return (
    <>
      <Row className="justify-content-center">
        <Card
          border="warning"
          style={{ width: "25rem", margin: "3rem", paddingTop: "1rem" }}
          key={id}
        >
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h3>{data.title}</h3>{" "}
            </Card.Title>
            <h4>Descripcion:</h4>
            <Card.Text>{data.description}</Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Categoria: {data.category}</ListGroup.Item>
              <ListGroup.Item>Stock: {data.stock}</ListGroup.Item>
              <ListGroup.Item>
                Precio:{" "}
                {data.oferta ? (
                  <>
                    <strong> ${data.precio / 2}</strong>
                    <Badge bg="success">Oferta</Badge>
                    <del>${data.precio}</del>
                  </>
                ) : (
                  data.precio
                )}
              </ListGroup.Item>
            </ListGroup>
            <ItemCount
              id={id}
              image={data.image}
              title={data.title}
              precio={data.oferta ? data.precio / 2 : data.precio}
              stock={data.stock}
            />
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default ItemDetail;
