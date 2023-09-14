import React, { useState } from "react";
import { Text, View } from  'react-native';

import estilo from './estilo'
import CampoInteiro from "../../../componentes/CampoInteiro";
import Botao from "../../../componentes/Botao";

export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}){
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    return <>

        <View style={estilo.informacao}>
            <Text style={estilo.nome}> {nome} </Text>
            <Text style={estilo.descricao}> {descricao} </Text>
            <Text style={estilo.preco}>{
            Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(preco)}   
            </Text>
        </View>
        <View style={estilo.carrinho}>
            <View>
                <View style={estilo.valor}>
                    <Text style={estilo.descricao}>Quantidade: </Text>
                    <CampoInteiro estilo={estilo.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal}/>
                </View>
                <View style={estilo.valor}>
                    <Text style={estilo.descricao}>Total: </Text>
                    <Text style={estilo.preco}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                    }).format(total)}       
                    </Text>
                </View>
            </View>
            <Botao valor="Remover do Carrinho" acao={() => {}}/>
        </View>
        <View style={estilo.divisor} />
    </>
}