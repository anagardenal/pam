import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './style';

const App = () => {

  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [numeroEscolhido, setNumeroEscolhido] = useState('');
  const [numeroSorteado, setNumeroSorteado] = useState('?');
  const [ultimoNumero, setUltimoNumero] = useState('--');
  const [pontosRodada, setPontosRodada] = useState('--');
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [mensagem, setMensagem] = useState(
    'Escolha um número para começar.'
  );

  const sortearNumero = () => {

  if (numeroEscolhido === '') {
      setMensagem('Digite um número entre 0 e 99.');
      return;
    }

    if (numeroEscolhido < 0 || numeroEscolhido > 99) {
      setMensagem('Digite um número entre 0 e 99.');
      return;
    }

    const novoNumero = Math.floor(Math.random() * 100);
    //0.73 × 100 = 73
    let diferenca;

    if (numeroEscolhido > novoNumero) {
      diferenca = numeroEscolhido - novoNumero;
    } else {
      diferenca = novoNumero - numeroEscolhido;
    }

    const pontos = 100 - diferenca;

    setNumeroSorteado(novoNumero);
    setUltimoNumero(novoNumero);
    setPontosRodada(pontos);
    setPontuacaoTotal(pontuacaoTotal + pontos);

    if (diferenca === 0) {
      setMensagem(
        'Acertou! Você fez ' + pontos + ' pontos!'
      );
    } else {
      setMensagem(
        'Você escolheu ' +
        numeroEscolhido +
        '. Número sorteado: ' +
        novoNumero +
        '. Você fez ' +
        pontos +
        ' pontos.'
      );
    }

    if (rodadaAtual < 5) {
      setRodadaAtual(rodadaAtual + 1);
      setNumeroEscolhido('');
    } else {
      setMensagem(
        'Fim de jogo! Você fez ' +
        (pontuacaoTotal + pontos) +  
        ' pontos.'
      );
    }
  };

  const reiniciarJogo = () => {

    setRodadaAtual(1);
    setNumeroEscolhido('');
    setNumeroSorteado('?');
    setUltimoNumero('--');
    setPontosRodada('--');
    setPontuacaoTotal(0);
    setMensagem('Escolha um número para começar.');
  };

  return (
    <View style={estilo.tela}>

      <View style={estilo.cabecalho}>

        <Text style={estilo.titulo}>
          Sorteio DevMedia
        </Text>

        <Text style={estilo.subtitulo}>
          Hora de ver quem é o vencedor
        </Text>

      </View>

      <Text style={estilo.rodada}>
        Rodada: {rodadaAtual} de 5
      </Text>

      <View style={estilo.circulo}>

        <Text style={estilo.numero}>
          {numeroSorteado}
        </Text>

      </View>

      <Text style={estilo.ultimoNumero}>
        Último número sorteado: {ultimoNumero}
      </Text>

      <Text style={estilo.pergunta}>
        Qual Número será sorteado?
      </Text>

      <TextInput
        style={estilo.campo}
        value={numeroEscolhido}
        onChangeText={setNumeroEscolhido}
      />

      <View style={estilo.botao}>

        <Button
          title="SORTEAR"
          onPress={sortearNumero}
        />

      </View>

      <Text style={estilo.tituloPontos}>
        Pontos da Rodada
      </Text>

      <Text style={estilo.valor}>
        {pontosRodada}
      </Text>

      <Text style={estilo.tituloPontos}>
        Pontuação Total
      </Text>

      <Text style={estilo.valor}>
        {pontuacaoTotal} / 500
      </Text>

      <Text style={estilo.mensagem}>
        {mensagem}
      </Text>

      <View style={estilo.botao}>

        <Button
          title="Jogar Novamente"
          onPress={reiniciarJogo}
        />

      </View>

    </View>
  );
};

export default App;