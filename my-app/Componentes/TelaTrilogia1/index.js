import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function TelaTrilogia1() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Japão
      </Text>

      <Image
        source={require('../../assets/japao.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        O Japão é um país localizado na Ásia e conhecido por sua tecnologia,
        cultura tradicional, culinária e belas paisagens.
      </Text>

      <Text style={styles.texto}>
        Entre os pontos turísticos mais famosos estão o Monte Fuji,
        os templos japoneses e a cidade de Tóquio.
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