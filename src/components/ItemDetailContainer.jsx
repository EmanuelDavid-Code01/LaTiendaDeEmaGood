import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setropas] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "productos", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setropas(docs);
        setloader(false);
      }
    });
  }, [id]);

  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <ItemDetail data={productos} id={id} />
    </>
  );
};

export default ItemDetailContainer;
