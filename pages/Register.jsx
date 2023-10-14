import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from "react-native-elements";
import { firebase } from '../Firebase';
import { Octicons } from '@expo/vector-icons';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleContainerPress = () => {
        // Oculta el teclado
        Keyboard.dismiss();
    };

    const navigation = useNavigation();
    const auth = firebase.auth();

    const registerUser = async (email, password, firstName, lastName) => {
        if (firstName == '' || lastName == '' || email == '' || password == '') {
            return alert('Debe llenar todos los campos')
        }
        await auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                auth.currentUser.sendEmailVerification({
                    url: 'https://learnguitarapp-7e65b.firebaseapp.com'
                })
                    .then(() => {
                        alert('Usuario registrado correctamente, revise su correo para verificar su cuenta')
                    }).catch((error) => {
                        alert("error 1 " + error.message)
                    }).then(() => {
                        firebase.firestore().collection('users').doc(auth.currentUser.uid).set({
                            firstName,
                            lastName,
                            email,
                        })
                    })
                    .catch((error) => {
                        alert("error 2 " + error.message)
                    })
            })
            .catch((error) => {
                alert("error 3 " + error.message)
            })
    }

    return (
        <TouchableWithoutFeedback style={styles.containerGeneral} onPress={handleContainerPress}>

            <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nombres</Text>
                    <Input
                        placeholder='Ingrese sus nombres'
                        onChangeText={(text) => setFirstName(text)} value={firstName}
                        rightIcon={<Octicons name="person" size={24} color="black" />}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Apellidos</Text>
                    <Input
                        placeholder='Ingrese sus apellidos'
                        onChangeText={(text) => setLastName(text)} value={lastName}
                        rightIcon={<Octicons name="person" size={24} color="black" />}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Correo Electrónico</Text>
                    <Input
                        placeholder='Correo electrónico'
                        onChangeText={(text) => setEmail(text)} value={email}
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
                    title="Registrarse"
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
                        marginVertical: 10,
                    }}
                    onPress={() => registerUser(email, password, firstName, lastName)}
                />

            </KeyboardAwareScrollView>

        </TouchableWithoutFeedback>
    )
}

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
    button: {
        width: 250,
        height: 40,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Register