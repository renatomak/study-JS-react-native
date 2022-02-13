import {useEffect, useState} from 'react';
import {carregaProdutores} from '../servicos/carregaDados';

export default function () {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    console.log(retorno);
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return [titulo, lista];
}
