import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ItemList = ({ data }) => {
  return (
    <>
      <Container fluid>
        <Row>
          {data.map((productos) => (
            <Item
              key={productos.id}
              id={productos.id}
              nombre={productos.nombre}
              description={productos.description}
              precio={productos.precio}
              stock={productos.stock}
              category={productos.category}
              image={productos.image}
              oferta={productos.oferta}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ItemList;
