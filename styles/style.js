import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#dcdcdc',
  },

  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },

  titulo: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  icones: {
  flexDirection: 'row',
    justifyContent: 'space-around',
  },
});