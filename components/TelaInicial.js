import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TelaInicial = () => {
const [numeroSorteado, setNumeroSorteado] = useState(null);
const [numeroInput, setNumeroInput] = useState('');
const [rodada, setRodada] = useState(1);
const [pontuacaoTotal, setPontuacaoTotal] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100 + 1);

    setNumeroSorteado(novoNumero);
  };
  const verificarNumero = () => {
    if (numeroInput === '') {
      return;
    }

    const numeroDigitado = parseInt(numeroInput);

    if (isNaN(numeroDigitado)) {
      return;
    }

    if (numeroDigitado === numeroSorteado) {
      setPontuacaoTotal(pontuacaoTotal + 10);
    }

    setRodada(rodada + 1);
    setNumeroInput('');
  };

  return (
    <View style={estilo.container}>

      <Text style={estilo.tituloTexto}>
        Jogo dos números
      </Text>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>
          {numeroSorteado}
        </Text>
      </View>
      <View style={estilo.boxInput}>
        <TextInput
          style={estilo.input}
          placeholder="Digite um número"
          value={numeroInput}
          onChangeText={setNumeroInput}
          keyboardType="numeric"
        />
      </View>

    </View>
  );
};

export default TelaInicial;