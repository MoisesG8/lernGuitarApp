import { Video } from 'expo-av'
import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Card } from "react-native-elements";
import imagenes from '../utils/DataImages';

const ImagesScreen = () => {
    return (
        <ScrollView>
            {imagenes.map((imagen, index) => {
                return (
                    // Render a card for each letter
                    <Card key={index}>
                        <Card.Title>{imagen.nombre}</Card.Title>
                        <Card.Divider />
                        <Card.Image source={imagen.imagen} resizeMode='contain' />
                        <Card.Divider />
                    </Card>
                )
            }
            )}
        </ScrollView>
    )
}

export default ImagesScreen