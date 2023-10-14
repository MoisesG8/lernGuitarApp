import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Icon, Button } from "react-native-elements";
import { Video } from 'expo-av';
import videos from '../utils/DataVideos';

const VideoScreen = () => {
    const alertaEmergente = () => {
        alert('Bienvenido a la aplicación!')
    }

    return (
        <ScrollView>
            {videos.map((video, index) => {
                return (
                    // Render a card for each letter
                    <Card key={index}>
                        <Card.Title>{video.title}</Card.Title>
                        <Card.Divider />
                        <Video
                            source={{ uri: video.url }}
                            style={{ width: 300, height: 200, alignSelf: 'center' }}
                            useNativeControls
                            resizeMode='contain'
                            isLooping
                        />
                        <Card.Divider />
                    </Card>
                )
            }
            )}
        </ScrollView>
    );
};

export default VideoScreen;
