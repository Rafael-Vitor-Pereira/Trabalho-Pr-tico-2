import React from 'react';
import './index.css';

const Itens = (props) => {
  return (
    <>
      <div className="item">
        <strong>{props.titulo}</strong>
        {props.children}
      </div>
    </>
  );
};

export default Itens;
