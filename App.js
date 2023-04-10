import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import logo from './assets/logo.jpg';
import background from './assets/fundo.jpg';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Faça o login para jogar</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor="#fff"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <AntDesign name="google" size={24} color="#fff" />
            <Text style={styles.googleButtonText}>Entrar com a conta do Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  title: {
    color: '#ff9900',
    fontSize: 30,
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    width: '80%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#ff9900',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dd4b39',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
});