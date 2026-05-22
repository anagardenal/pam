import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function TelaTrilogia3() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Inglaterra
      </Text>

      <Image
        source={require('../../assets/inglaterra.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        A Inglaterra é conhecida por sua história,
        cultura, castelos e tradições famosas.
      </Text>

      <Text style={styles.texto}>
        Entre os lugares mais visitados estão o Big Ben,
        o Palácio de Buckingham e a cidade de Londres.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: '#b30000',
  },

  imagem: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },

  texto: {
    fontSize: 17,
    textAlign: 'center',
    color: '#444',
    marginBottom: 15,
  },
});