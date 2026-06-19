import React from 'react';
import { View, Text } from 'react-native';

import { Entypo, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles/style';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.titulo}>Entypo</Text>

        <View style={styles.icones}>
         {/* <Entypo name="home" size={30} color="darkgreen" /> */} 
          <Entypo name="arrow-bold-down" size={30} color="pink" />
          <Entypo name="arrow-bold-left" size={30} color="pink" />
          <Entypo name="arrow-bold-right" size={30} color="pink" />
          <Entypo name="chat" size={30} color="purple" />
          <Entypo name="cloud" size={30} color="black" />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>EvilIcons</Text>

        <View style={styles.icones}>
          <EvilIcons name="close" size={40} color="green" />
          <EvilIcons name="location" size={40} color="darkblue" />
          <EvilIcons name="calendar" size={40} color="pink" />
          <EvilIcons name="star" size={40} color="red" />
          <EvilIcons name="trash" size={40} color="gray" />
          <EvilIcons name="search" size={40} color="gray" />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>MaterialCommunityIcons</Text>

        <View style={styles.icones}>
          <MaterialCommunityIcons name="account" size={50} color="brown" />
          <MaterialCommunityIcons name="clock-outline" size={50} color="purple" />
          <MaterialCommunityIcons name="numeric-1-circle" size={50} color="green" />
          <MaterialCommunityIcons name="reload" size={50} color="yellow" />
          <MaterialCommunityIcons name="camera" size={50} color="dark" />
          <MaterialCommunityIcons name="cart" size={50} color="darkblue" />
        </View>
      </View>

    </View>
  );
}