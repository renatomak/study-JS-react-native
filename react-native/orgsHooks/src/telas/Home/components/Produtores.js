import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text} from 'react-native';

import {carregaProdutores} from '../../../servicos/carregaDados';
import Produtor from './Produtor';

const Produtores = ({topo: Topo}) => {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    console.log(retorno);
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };
  return (
    <ScrollView>
      <FlatList
        data={lista}
        renderItem={({item}) => <Produtor {...item} />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={TopoLista}
      />
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});

export default Produtores;
