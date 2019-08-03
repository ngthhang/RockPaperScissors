import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

export function BottomTab(props) {
    return (
        <View style={styles.BottomTab}>
            <TouchableOpacity
                onPress={() => { alert('user') }
                }>
                <Ionicons name='md-contact' size={35} color='#DD7A00' />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { alert('share') }
                }>
                <AntDesign name='sharealt' size={35} color='#DD7A00' />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { alert('give stars') }
                }>
                <Entypo name='heart' size={35} color='#DD7A00' />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    BottomTab: {
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})