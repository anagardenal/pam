import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Image
          style={estilos.imagem}
          source="https://img.cdndsgni.com/preview/11599815.jpg"        
        />
      </View>
      <View style={estilos.infos}>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#77e4db',
    alignItems: 'center',
    paddingTop: 10
  },
  card:{
    width: 250,
    height: 250,
    borderColor: '#000',
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: '50%',
    padding:10,
    zIndex:1
  },
  imagem:{
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },
  infos:{
    width: '90%',
    height: 400,
    backgroundColor: '#807e7e',
    marginTop: -125,
    zIndex: 0
  }
});
