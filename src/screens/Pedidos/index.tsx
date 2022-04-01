import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import bg from '../../assets/imgs/background.png';

export default function Pedidos() {
 return (
   <View style={styles.container}>
     <Text>Pagina Pedidos</Text>
     <Text>Nome: </Text>
     <Text>Email logado: </Text>
     <Text>Status: </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})