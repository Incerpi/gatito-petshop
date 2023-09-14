import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView} from "react-native";

import estiloGlobal, { cores } from '../../estilos'
import estilo from "./estilo";

export default function TelaPadrao({children}){
    return <>
        <SafeAreaView style={estilo.ajusteTela}>
            <StatusBar backgroundColor={cores.roxo}/>
            <KeyboardAvoidingView 
                behavior={Platform.OS == "ios" ? "padding" : ''}
                style={estiloGlobal.preencher}
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={estilo.ajusteTelaBaixo}/>
    </>
}