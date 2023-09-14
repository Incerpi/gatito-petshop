import React from 'react';

import { View, Text } from 'react-native';

import Botao from '../Botao';
import estilo from './estilo';

export default function StatusCarrinho({ total }) {
  return <View style={estilo.conteudo}>
    <View style={estilo.total}>
      <Text style={estilo.descricao}>Total do Carrinho:</Text>
      <Text style={estilo.valor}>
        {
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(total)
        }
      </Text>
    </View>
    <View style={estilo.botao}>
      <Botao valor='Concluir Pedido' invertido />
    </View>
  </View>
}