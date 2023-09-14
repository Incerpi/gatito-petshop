import React from "react";
import { TouchableOpacity, Text } from "react-native";
import funcaoEstiloPadrao from "./estilo";

export default function Botao ({pequeno = false, invertido = false, valor, acao, estilo}){
    const estilosPadrao = funcaoEstiloPadrao(pequeno, invertido);
    return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilo]}>
        <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
}