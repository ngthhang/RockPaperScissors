import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import CHOICES from '../components/CHOICE';

export function ButtonGroup(props) {
    return (CHOICES.map(item => {
        return (
            <TouchableOpacity
                key={item.name}
                style={styles.ButtonGroup}
                onPress={() => {
                    props.onPressButton(item)
                }}
            >
                <Text style={styles.textButton}>{item.name}</Text>
            </TouchableOpacity>
        );
    })
    );
}

const styles = StyleSheet.create({
    ButtonGroup: {
        width: 150,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#a8d0e6',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textButton: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
})