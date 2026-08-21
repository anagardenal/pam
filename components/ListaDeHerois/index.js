import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo.js';

export default function ListaDeHerois() {
  return (
    <View style={estilo.container}>
      <Titulo />

      <ScrollView style={estilo.lista}>

        <ItemLista
          heroi="Homem-Aranha"
          poder="Teias"
          imagem={require('../../assets/homemaranha2.jpg')}
        />

        <ItemLista
          heroi="Homem de Ferro"
          poder="Tecnologia"
          imagem={require('../../assets/homemdeferro2.webp')}
        />

        <ItemLista
          heroi="Capitão América"
          poder="Superforça"
          imagem={require('../../assets/sequencia-dos-filmes-da-marvel.webp')}
        />

        <ItemLista
          heroi="Thor"
          poder="Trovão"
          imagem={require('../../assets/thor.webp')}
        />

        <ItemLista
          heroi="Hulk"
          poder="Superforça"
          imagem={require('../../assets/hulkfoto.jpg')}
        />

        <ItemLista
          heroi="Pantera Negra"
          poder="Agilidade"
          imagem={require('../../assets/panteranegra.webp')}
        />

        <ItemLista
          heroi="Doutor Estranho"
          poder="Magia"
          imagem={require('../../assets/doutor_estranho_multiverso.webp')}
        />

        <ItemLista
          heroi="Viúva Negra"
          poder="Biotecnologia"
          imagem={require('../../assets/viuvanegra2.jpg')}
        />

      </ScrollView>
    </View>
  )
}