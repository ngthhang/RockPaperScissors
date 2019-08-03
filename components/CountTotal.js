import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

export function CountTotal(props) {
    const { countPlayTotal, countLostTotal, countTieTotal, countWonTotal } = props;
    const percentWon = Math.floor((countWonTotal / countPlayTotal) * 100);
    const percentLoses = Math.floor((countLostTotal / countPlayTotal) * 100);
    const percentTie = Math.floor((countTieTotal / countPlayTotal) * 100);
    return (
        <View style={styles.countButton}>
            <TouchableOpacity
                onPress={() => {
                    alert(
                        'Total Play: ' + countPlayTotal + '\n' +
                        '------------------------------------ \n' +
                        'Total Won: ' + countWonTotal + '\n' +
                        '------------------------------------ \n' +
                        'Total Lost: ' + countLostTotal + '\n' +
                        '------------------------------------ \n' +
                        'Total Tie: ' + countTieTotal + '\n'
                    );
                }}
            >
                <Feather name='award' size={35} color='#DD7A00' />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    alert(
                        '% of Wins: ' + percentWon + '\n' +
                        '------------------------------------ \n' +
                        '% of Loses: ' + percentLoses + '\n' +
                        '------------------------------------ \n' +
                        '% of Tie: ' + percentTie + '\n'
                    );
                }}
            >
                <AntDesign name='piechart' size={35} color='#DD7A00' />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    countButton: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})