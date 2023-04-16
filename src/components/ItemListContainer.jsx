import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from "./Loader";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setropas] = useState([]);
  const [loader, setLoader] = useState(true);
  const { category } = useParams();
  const { oferta } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setropas(docs);
      setLoader(false);
    });
  }, []);

  const dataFilter = productos.filter(
    (cateData) => cateData.category === category
  );
  const ofertaFilter = productos.filter((ofertaData) => ofertaData.oferta);

  useEffect(() => {}, [dataFilter, ofertaFilter]);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      {category ? (
        <ItemList data={dataFilter} />
      ) : oferta === "true" ? (
        <ItemList data={ofertaFilter} />
      ) : (
        <ItemList data={productos} />
      )}
    </>
  );
};

export default React.memo(ItemListContainer);
