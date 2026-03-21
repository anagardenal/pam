import { Image } from 'expo-image';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const s_i = 22;
  const c_i = "#94A3B8";

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
    <ScrollView style={estilos.container}>

      <View style={estilos.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/d8/4d/e1/d84de1f8596f8763d6ba7362000b98d7.jpg' }}
          style={estilos.fotoPerfil}
        />
        <Text style={estilos.nome}>Lady Gaga</Text>
      </View>

      <View style={estilos.social}>
        <FontAwesome5 name="facebook" size={s_i} color={c_i} />
        <FontAwesome5 name="instagram" size={s_i} color={c_i} />
        <FontAwesome5 name="whatsapp" size={s_i} color={c_i} />
        <FontAwesome5 name="github" size={s_i} color={c_i} />
        <FontAwesome5 name="tiktok" size={s_i} color={c_i} />
      </View>

      <View style={estilos.card}>
        <Text style={estilos.titulo}>Amigos</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {amigos.map((amigo, index) => (
            <View key={index} style={estilos.amigo}>
              <Image source={{ uri: amigo.foto }} style={estilos.fotoAmigo} />
              <Text style={estilos.nomeAmigo}>{amigo.nome}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* FOTOS */}
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Fotos</Text>

        <View style={estilos.grid}>
          {fotos.map((foto, index) => (
            <Image key={index} source={{ uri: foto }} style={estilos.fotoGrid} />
          ))}
        </View>
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  header: {
    alignItems: 'center',
    padding: 20,
  },

  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#38BDF8',
  },

  nome: {
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#1E293B',
    margin: 15,
    borderRadius: 15,
    padding: 15,
  },

  titulo: {
    color: '#38BDF8',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  amigo: {
    alignItems: 'center',
    marginRight: 15,
  },

  fotoAmigo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#38BDF8',
  },

  nomeAmigo: {
    color: '#E2E8F0',
    fontSize: 12,
    marginTop: 5,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  fotoGrid: {
    width: '32%',
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
});
