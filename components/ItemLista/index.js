import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxHeroi}>

      <Image
        source={props.imagem}
        style={estilo.imagem}
      />

      <Text style={estilo.nomeHeroi}>
        {props.heroi}
      </Text>

      <Text>
        Poder: {props.poder}
      </Text>

    </View>
  )
}