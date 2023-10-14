import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header as HeaderRNe, Button } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Salir from '../utils/Salir';


const Header = (props) => {
    //console.log(props);

    return (
        <SafeAreaProvider>
            {!props.sesionIniciada ? (
                <HeaderRNe
                    backgroundColor="red"
                    centerComponent={{ text: props.title, style: styles.heading }}
                />
            ) : (
                <></>
            )}
            <HeaderRNe
                backgroundColor="red"
                rightComponent={
                    <View style={styles.headerRight}>
                        <Button onPress={Salir}>
                            <AntDesign name="logout" size={24} color="white" />
                        </Button>
                    </View>
                }
                centerComponent={{ text: props.title, style: styles.heading }}
            />
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 0,
        height: 40,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Header;
