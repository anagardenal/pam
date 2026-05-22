import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './Componentes/TelaInicial';
import TelaTrilogia1 from './Componentes/TelaTrilogia1';
import TelaTrilogia2 from './Componentes/TelaTrilogia2';
import TelaTrilogia3 from './Componentes/TelaTrilogia3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Japão" component={TelaTrilogia1} />
        <Stack.Screen name="França" component={TelaTrilogia2} />
        <Stack.Screen name="Inglaterra" component={TelaTrilogia3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}