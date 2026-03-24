import { Image } from 'expo-image';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const largura = Dimensions.get('window').width;

export default function App() {
  const amigos = [
    { nome: 'Bruno M.', foto: 'https://i.pinimg.com/1200x/e2/fb/82/e2fb827ecfefd7f0e2df7b1d94e8626e.jpg' },
    { nome: 'Sabrina C.', foto: 'https://i.pinimg.com/736x/4e/31/ac/4e31acea8d72b9d555fd26cab6dbeee3.jpg' },
    { nome: 'Ariana G.', foto: 'https://i.pinimg.com/736x/e7/85/68/e785680fd21a4783edfb4bcf4790914c.jpg' },
    { nome: 'Tom H.', foto: 'https://i.pinimg.com/736x/35/3b/07/353b07746cfd923715b4e99f8c2f8f3c.jpg' },
  ];

  const fotos = [
    'https://i.pinimg.com/736x/02/57/e9/0257e926f7968dbdf6f2399e6355c3c8.jpg',
    'https://i.pinimg.com/736x/3b/22/d6/3b22d66e6962358f3ac9de4cbf4e89ad.jpg',
    'https://i.pinimg.com/736x/30/13/94/301394a36d63869013e0145951aaf720.jpg',
    'https://i.pinimg.com/736x/20/cc/ff/20ccff2f8b45a710894052ccb6c5155e.jpg',
    'https://i.pinimg.com/736x/38/d4/ea/38d4ea01b1ffbb4cdef5b25e8938fafb.jpg',
    'https://i.pinimg.com/736x/73/9a/e2/739ae284d3e7cef34d0b8a0176324945.jpg',
  ];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.center}>
        <View style={styles.bordaPerfil}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/d8/4d/e1/d84de1f8596f8763d6ba7362000b98d7.jpg' }}
            style={styles.perfil}
          />
        </View>
        <Text style={styles.nome}>Lady Gaga</Text>
      </View>

      <View style={styles.row}>
        {['facebook', 'instagram', 'whatsapp', 'github', 'tiktok'].map((icon, i) => (
          <FontAwesome5 key={i} name={icon} size={22} color="#94A3B8" />
        ))}
      </View>

      <Text style={styles.titulo}>Amigos</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {amigos.map((a, i) => (
          <View key={i} style={styles.center}>
            <Image source={{ uri: a.foto }} style={styles.amigo} />
            <Text style={styles.texto}>{a.nome}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.titulo}>Fotos</Text>
      <View style={styles.grid}>
        {fotos.map((f, i) => (
          <Image key={i} source={{ uri: f }} style={styles.foto} />
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  center: {
    alignItems: 'center',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },

  bordaPerfil: {
    marginTop: 20,
    borderWidth: 4,
    borderColor: '#38BDF8',
    borderRadius: 70,
    padding: 4,
  },

  perfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  nome: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5,
  },

  titulo: {
    color: '#38BDF8',
    fontSize: 16,
    marginVertical: 10,
    marginLeft: 10,
  },

  amigo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 8,
  },

  texto: {
    color: '#fff',
    fontSize: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },

  foto: {
    width: largura / 3,
    height: largura / 3,
  },
});