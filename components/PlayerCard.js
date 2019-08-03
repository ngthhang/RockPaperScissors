import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function PlayerCard (props) {
    return (
        <View style={styles.PlayerCard}>
            <Text style={styles.playerName}>{props.name}</Text>
            <Image style={styles.imageChoice} source={{uri: props.choice.uri}}/>
            <Text style={styles.choiceName}>{props.choice.name}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    PlayerCard: {
        flex: 0.5,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        textAlign: 'center'
    },
    playerName: {
        fontSize:25,
        fontWeight:'700',
        color: '#3A506B'
    },
    choiceName: {
        fontSize: 25,
        fontWeight:'500',
        color: '#3A506B'
    },
    imageChoice:{ 
        width: 120,
        height: 120
    }
})