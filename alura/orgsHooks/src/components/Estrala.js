import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

const Estrela = ({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) => {
  const getImage = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };
  const estilos = estilosFuncao(grande);
  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImage()} style={estilos.estrela} />
    </TouchableOpacity>
  );
};

const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

export default Estrela;
