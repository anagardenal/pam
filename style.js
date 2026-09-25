import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: '#eef7f7',
    alignItems: 'center',
  },

  cabecalho: {
    width: '100%',
    height: 100,
    backgroundColor: '#9ee0db',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#102c45',
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#102c45',
    marginTop: 5,
  },

  rodada: {
    fontSize: 18,
    fontWeight: '700',
    backgroundColor: '#c4e9e6',
    padding: 12,
    paddingHorizontal: 70,
    marginTop: 30,
    marginBottom: 20,
  },

  circulo: {
    height: 160,
    width: 160,
    borderRadius: 80,
    backgroundColor: '#102c45',
    borderWidth: 10,
    borderColor: '#55d8c9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  numero: {
    fontSize: 50,
    fontWeight: '700',
    color: '#fff',
  },

  ultimoNumero: {
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 15,
    marginBottom: 20,
  },

  pergunta: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 15,
  },

  campo: {
    width: '85%',
    height: 50,
    borderWidth: 2,
    borderColor: '#c4dede',
    paddingHorizontal: 15,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#fff',
  },

  botao: {
    width: 200,
    marginTop: 15,
  },

  tituloPontos: {
    fontSize: 21,
    fontWeight: '700',
    marginTop: 20,
  },

  valor: {
    fontSize: 17,
    marginTop: 5,
  },

  mensagem: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },

});

export default estilo;