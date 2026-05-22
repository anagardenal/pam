import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function TelaTrilogia2() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        França
      </Text>

      <Image
        source={require('../../assets/franca.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        A França é um país europeu conhecido por sua arte,
        gastronomia, moda e monumentos famosos.
      </Text>

      <Text style={styles.texto}>
        Um dos pontos turísticos mais conhecidos é a Torre Eiffel,
        localizada na cidade de Paris.
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
    color: '#0033a0',
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