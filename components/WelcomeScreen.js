import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';

export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'amaticSC-regular': require('../assets/fonts/AmaticSC-Regular.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.fontLoaded ? (
                        <Text style={styles.gameNameStyles}>
                            Rock Paper Scissors
                    </Text>
                    ) : null
                }
                <Image
                    style={styles.gameImage}
                    source={require('../assets/WelcomeImage.jpg')}
                />
                <View style={styles.displayButton}>
                    {
                        this.state.fontLoaded ? (
                            <Text style={styles.tapToPlayText}>
                                Tap to play
                        </Text>
                        ) : null
                    }
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({ routeName: 'PlayGroundScreen' })
                                ],
                            }))
                        }}
                    >
                        <AntDesign name='playcircleo' size={50} color='#DD7A00' />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcf8c6',
        flexDirection: 'column',
    },
    gameNameStyles: {
        flex: 0.15,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '300',
        fontFamily: 'amaticSC-regular',
        color: '#A37B73'
    },
    gameImage: {
        flex: 0.5,
        width: null,
        height: null,
        borderRadius: 40,
    },
    tapToPlayText: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 40,
        fontWeight: '100',
        fontFamily: 'amaticSC-regular',
        color: '#A37B73'
    },
    displayButton: {
        flex: 0.35,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});