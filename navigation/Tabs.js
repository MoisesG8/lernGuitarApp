import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import Home from '../pages/Home';
import ImagesScreen from '../pages/ImagesScreen';
import VideoScreen from '../pages/VideoScreen';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();


const TabGroup = () => {
    return (
        <Tab.Navigator screenOptions={{ headerTitleStyle: styles.header, tabBarActiveTintColor: 'red', tabBarBadgeStyle: styles.tabStyle }}>
            <Tab.Screen name="Inicio" component={Home} options={{
                headerShown: true,
                headerBackground: () => (<Header screenName="Inicio" sesionIniciada={true} />),
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Imagenes" component={ImagesScreen} options={{
                headerShown: true,
                headerBackground: () => (<Header screenName="Imagenes" sesionIniciada={true} />),
                tabBarIcon: ({ color, size }) => (
                    <Icon name="image" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Videos" component={VideoScreen} options={{
                headerShown: true,
                headerBackground: () => (<Header screenName="Videos" sesionIniciada={true} />),
                tabBarIcon: ({ color, size }) => (
                    <Icon name="video-camera" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 40,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    tabStyle: {
        backgroundColor: 'red',
    }
});

const Tabs = () => {
    return (
        <TabGroup />
    )
}

export default Tabs;