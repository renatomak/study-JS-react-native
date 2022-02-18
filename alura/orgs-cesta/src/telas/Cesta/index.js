import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Card from "./components/Card";
import Texto from "../../components/Texto";

const Cesta = ({ topo, detalhes, itens }) => {
  return (
    <>
      <FlatList
                data={itens.lista}
                renderItem={Card}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => (
                  <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                      <Detalhes {...detalhes}/>
                      <Texto style={estilos.titulo}>{itens.titulo}</Texto>  
                    </View>
                  </>
                )}
            />
      
    </>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  lista: {
    paddingHorizontal: 16
  }
});

export default Cesta;
