import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Botao from "../../../components/Botao";
import CampoInteiro from "../../../components/CampoInteiro";

import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(0);
  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  };

  const inverteExpandir = (_) => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  };

  return (
    <>
      <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </TouchableOpacity>
      {expandir && (
        <View style={estilos.carrinho}>
          <View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Quantidade</Text>
              <CampoInteiro
                valor={quantidade}
                acao={atualizaQuantidadeTotal}
                estilos={estilos.quantidade}
              />
            </View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Total</Text>
              <Text style={estilos.preco}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </Text>
            </View>
          </View>
          <Botao valor="Adicionar ao Carrinho" acao={() => {}} />
        </View>
      )}
      <View style={estilos.divisor} />
    </>
  );
}
