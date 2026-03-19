import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image
          style={estilos.imagem}
          source="https://static.vecteezy.com/system/resources/previews/050/345/523/non_2x/grizzly-bear-face-free-png.png"
        />
      </View>
      <View style={estilos.infos}>

        <View style={estilos.social}>
          <FontAwesome5 name="facebook" size={24} color="black" />
          <FontAwesome5 name="instagram" size={24} color="black" />
          <FontAwesome5 name="whatsapp" size={24} color="black" />
          <FontAwesome5 name="github" size={24} color="black" />
          <FontAwesome5 name="github" size={24} color="black" />
        </View>

        <View style={estilos.texto}>
            <text>Fotos</text>
        </View>

        <View style={estilos.fotos}>
            <text>Amigos</text>
        </View>

      </View>
    </View>

  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77e4db',
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: 250,
    height: 250,
    borderColor: '#000',
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: '50%',
    padding: 10,
    zIndex: 1
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },
  infos: {
    width: '90%',
    height: 400,
    backgroundColor: '#807e7e',
    marginTop: -125,
    zIndex: 0
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 125,
    padding: 20
  }

});
