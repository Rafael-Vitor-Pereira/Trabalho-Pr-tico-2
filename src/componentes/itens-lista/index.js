import React from 'react';
import './index.css';

const ItemLista = ({ children }) => {
  return (
    <>
      <p className="item-lista">
        <center>{children}</center>
      </p>
    </>
  );
};

export default ItemLista;
