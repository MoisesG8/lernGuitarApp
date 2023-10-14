import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from "react-native-elements";
import { firebase } from '../Firebase';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const auth = firebase.auth();
  const handleContainerPress = () => {
    // Oculta el teclado
    Keyboard.dismiss();
  };

  const userPrueba = 'admin';
  const passPrueba = '1234';


  const onLoginPress = async () => {

    if (username == '' || password == '') {
      return alert('Debe ingresar usuario y contraseña')
    } await auth.signInWithEmailAndPassword(username, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email);
    }).then(() => {
      setPassword('');
      setUsername('');
      Keyboard.dismiss();
      navigation.navigate('Tabs');
    }).catch((error) => {
      alert("Usuario o contraseña incorrecta");
    });
  };

  return (
    <TouchableWithoutFeedback style={styles.containerGeneral} onPress={handleContainerPress}>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Usuario</Text>
          <Input
            placeholder='Ingrese su correo electrónico'
            onChangeText={(text) => setUsername(text)} value={username}
            rightIcon={{
              type: 'material-icons',
              name: 'login',
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <Input
            placeholder='Ingrese su contraseña'
            onChangeText={(text) => setPassword(text)} value={password}
            rightIcon={{
              type: 'material-icons',
              name: 'lock',
            }}
            secureTextEntry
          />
        </View>
        <Button
          title="Iniciar sesión"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: 'rgba(111, 202, 186, 1)',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 200,
            marginVertical: 5,
          }}
          onPress={onLoginPress}
        />

        <Button
          title="¿Aún no tienes cuenta? Registrate"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: 'rgba(219, 7, 61, 1)',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
          containerStyle={{
            marginHorizontal: 20,
            height: 150,
            width: 200,
            marginVertical: 5,
            justifyContent: 'space-around',
          }}
          onPress={() => navigation.navigate('Registro')}
        />

      </KeyboardAwareScrollView>

    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerGeneral: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 250,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginComponent;
