import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native';
import Tabs from './Tabs'
import LoginComponent from '../components/LoginComponent'
import { firebase } from '../Firebase';
import Register from '../pages/Register';

//Inicializmos el stack para crear la navegación entre pantallas
const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [isLogged, setIsLogged] = React.useState(true);
    const [usuario, setUsuario] = React.useState(null);
    const auth = firebase.auth();

    const onLogin = (usuario) => {
        setUsuario(usuario);
        if (isLogged) { setIsLogged(false) }
    }

    React.useEffect(() => {
        const subscriber = auth.onAuthStateChanged(onLogin);
        return subscriber;
    }, []);

    if (isLogged) {
        return null;
    }

    if (!usuario) {
        return (
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Inicio de sesión" component={LoginComponent} />
                <Stack.Screen name="Registro" component={Register} />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator >
            <Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs} />
        </Stack.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Navigation />
        </NavigationContainer>
    )
}