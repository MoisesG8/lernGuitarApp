import React from 'react';
import "react-native-gesture-handler";
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Card, Icon, Button, Text } from "react-native-elements";
import { posiciones } from '../utils/DataImages';

const Home = () => {
    const alertaEmergente = () => {
        alert('Bienvenido a la aplicación!')
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {posiciones.map((u, i) => (
                <Card key={i} containerStyle={styles.cardContainer}>
                    <Image
                        source={u.imagen}
                        style={{ width: 200, height: 200, alignSelf: 'center' }}
                        resizeMethod='auto'
                    />
                    <Text style={{ marginBottom: 10, marginTop: 20, fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>
                        {u.name} Nota: {u.nota}
                    </Text>
                </Card>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContent: {
        alignItems: 'center',
    },
    cardContainer: {
        width: 350, // Ancho de las tarjetas
        marginVertical: 20, // Espacio vertical entre tarjetas
    },
})

export default Home;
