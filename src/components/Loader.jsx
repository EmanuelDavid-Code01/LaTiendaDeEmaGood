import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <>
      <div className="text-center mx-auto">
        <Spinner
          animation="border"
          variant="info"
          style={{ marginTop: "15rem" }}
        >
          <h3 style={{ marginLeft: "-10rem" }}></h3>
        </Spinner>
        <h2>Buscando ropa</h2>
      </div>
    </>
  );
};

export default Loader;
