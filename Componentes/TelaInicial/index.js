import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        Conhecendo Países
      </Text>

      <Image
        source={require('../../assets/mapa.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Você conhece diferentes culturas ao redor do mundo?
      </Text>

      <Text style={styles.textos}>
        Explore informações e curiosidades sobre três países famosos. Clique nos botões abaixo para conhecer cada um deles.
      </Text>

      <View style={styles.botao}>
        <Button
          title="Conhecer Japão"
          onPress={() => props.navigation.navigate("Japão")}
          color="#6b4f1d"
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Comnhecer França"
          onPress={() => props.navigation.navigate("França")}
          color="#6b4f1d"
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Conhecer Inglaterra"
          onPress={() => props.navigation.navigate("Inglaterra")}
          color="#6b4f1d"
        />
      </View>

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

  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: '#372d00',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
    color: '#333',
  },

  textos: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },

  imagem: {
    width: 300,
    height: 200,
    borderRadius: 15,
  },

  botao: {
    width: '80%',
    marginBottom: 15,
  },
});