import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';


export const HeaderComponent = () => {
    return(
        <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
}