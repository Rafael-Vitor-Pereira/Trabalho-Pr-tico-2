import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Itens from '../../componentes/itens';
import ItemLista from '../../componentes/itens-lista';
import './index.css';

const Infos = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function pegarDados() {
      const resposta = await axios.get(
        'https://24pullrequests.com/users/turbo87.json',
      );
      setInfo(resposta.data);
    }
    pegarDados();
  }, []);

  if (info === null) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Itens titulo="Nome: ">{info.nickname}</Itens>
      <Itens titulo="Link GitHub: ">{info.github_profile}</Itens>
      <Itens titulo="Organizações que faz parte: ">
        {info.organisations.map((item) => (
          <ItemLista>
            <p>
              <strong>Nome: </strong>
              {item.login}
            </p>
            <img src={item.avatar_url} alt="img instituição" />
          </ItemLista>
        ))}
      </Itens>
    </>
  );
};

export default Infos;
