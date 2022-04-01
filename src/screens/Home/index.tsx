import React, {useContext} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import bg from '../../assets/imgs/background.png';

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    
    <View style={style.container}>
      <Text>Pagina Home</Text>
      <Text>Bem vindo: </Text>      

      <Button
        title="Acessar pedidos"
        
        onPress={() => navigation.navigate("Pedidos")}
      />
    </View>
   
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    width: '90%',
    height: 45,
    backgroundColor: '#32CD32',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  },
  Background:{
    width: '100%',
    justifyContent: 'center',
    height: '100%'
  }
})