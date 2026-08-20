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
          poder="Agilidade"
          imagem={require('../../assets/SPIDER_MAN_GALLERY_3.webp')}
        />

        <ItemLista
          heroi="Homem de Ferro"
          poder="Tecnologia"
          imagem={require('../../assets/homem-do-ferro-113449201.webp')}
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
          imagem={require('../../assets/foto-renderizada-em-3d-de-hulk.webp')}
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
          poder="Combate"
          imagem={require('../../assets/viuvanegra2.webp')}
        />

      </ScrollView>
    </View>
  )
}