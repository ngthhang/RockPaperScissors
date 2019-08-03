import React from 'react';
import { StyleSheet, Text } from 'react-native';

export function GameStatus(props) {
    const status = props.status;
    const getColor = () => {
        if (status === 'Victory!') {
            return '#6FBA39';
        }
        else if (status === 'Defeat!') {
            return '#FF5C5C';
        }
        return '#3A506B';
    }
    const StatusStyle = { color: getColor() };
    return (
        <Text style={[styles.GameStatus, StatusStyle]}>{status}</Text>
    );
}

const styles = StyleSheet.create({
    GameStatus: {
        flex: 1,
        fontSize: 40,
        fontWeight: '800',
        textAlign: 'center'
    }
})