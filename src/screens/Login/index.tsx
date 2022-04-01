import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackgroundBase, ImageBackground, ToastAndroid  } from 'react-native';
import {InputRound} from '../Login/input';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import bg from '../../assets/imgs/background.png';
import { Modalize } from 'react-native-modalize';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import api from '../../providers/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAutenticacaoContext } from '../../providers/autenticacao';

export interface LoginScreenProps {
}

export default function LoginScreen(props: LoginScreenProps) {
  
 
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');
  const nav = useNavigation<any>();
  const modal = React.useRef<Modalize>();
  const { setUsuario } = useAutenticacaoContext();

  const logar = async (dados) => {
    console.log(dados)  
    
    await api.post('/login', dados)
        .then(response => {
            setUsuario(dados.email);
            nav.navigate('app')
            AsyncStorage.setItem('jwt', response.data.jwt);
        })
        .catch(() => ToastAndroid.show("Email ou senha incorreta", 3000));
}
  
const cadastrar = async (usuario) => {
  console.log(usuario)
  
  await api.post('/usuarios', {usuario})
      //retornou código de sucesso 201
      .then(() => ToastAndroid.show('Cadastrado com sucesso', ToastAndroid.LONG))
      //retornou código de erro 30x/40x/50x
      .catch(() => ToastAndroid.show('Falha ao cadastrar usuário', ToastAndroid.LONG));
   
  modal.current?.close();
}

  
 function handleLogin(){
  if (email !== '' && senha !== '')
  console.log('Logado com Sucesso');
  else
    console.log('O campo Email ou Senha, precisa ser preenchido!');
  nav.navigate('Home')


}

 return (
  <ImageBackground source={bg} style={styles.Background}>
    <Formik 
      initialValues={{email: '', senha: ''}}
      validationSchema={Yup.object({
        email: Yup.string().required('Informe o email').email('E-mail não válido'),
        senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa de 6 caracteres')
      })}
      onSubmit={logar}
    >
        <View style={styles.container}>
          <Text style={styles.title}>Seja bem vindo(a)!</Text>

          <Input
              placeholder="Digite seu email"
              style={styles.input}              
              value={email}
              onChangeText={(email) => setEmail(email)}
                            
              inputContainerStyle={styles.containerInput}
              inputStyle={{color:'green'}} leftIcon={{name:'person', color: 'green'}}
          />
          
          <Input
              style={styles.input}
              value={senha}
              onChangeText={(senha) => setSenha(senha)}
              placeholder="Digite sua senha"
              inputContainerStyle={styles.containerInput}
              inputStyle={{color:'green'}} leftIcon={{name:'lock', color: 'green'}}
              secureTextEntry={true}
              
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </Formik>

      <Formik
                    initialValues={{email:'', senha:'', nome: ''}}
                    onSubmit={cadastrar}
                >
                    {({handleChange, handleSubmit, isSubmitting}) => (
                        <>
                            <Input onChangeText={handleChange('email')} placeholder='Digite seu email' keyboardType='email-address' />
                            <Input onChangeText={handleChange('nome')} placeholder='Digite seu nome'  />
                            <Input onChangeText={handleChange('senha')} placeholder='Digite sua senha' secureTextEntry />
                            <Button type='clear' onPress={() => handleSubmit()} title="Cadastrar" disabled={isSubmitting} />
                        </>
                        )}
                </Formik>

    </ImageBackground>     
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    marginBottom: 14,
    fontSize: 20,
  },  
  input:{
    width: '90%',
    height: 45,
    //backgroundColor: '#A7A7A7',
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
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
  },
  erro: { fontSize: 20, textAlign: "center", marginBottom: 20, marginTop: -10, color: 'red'},
  containerInput: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30, 
    padding: 5,
    marginBottom: 5,
  },
  logo: { color: 'blue', fontSize: 50, textAlign: 'center'},
  error:{color:'blue', fontSize: 20, textAlign:'right'},
  errorLogin: {color: 'blue', textAlign: 'center'},
  cadastrar: {
    color: 'blue',
    fontSize: 20,
    textDecorationLine: 'underline',
    margin: 30,
    textAlign: 'center'
  } 
  
})