import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.contanier}>
      <View style={estilos.area1}>
        <Text style={estilos.font}>A</Text>
        <Text style={estilos.font}>B</Text>
        <Text style={estilos.font}>C</Text>
        <Text style={estilos.font}>D</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contanier:{  
    flex: 1,
    backgroundColor: '#464444',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  font:{
    fontSize: 80,
  },
  area1:{    
    width: 370,
    backgroundColor: '#ffffffff',
    flexDirection: 'row',
    
  }
});