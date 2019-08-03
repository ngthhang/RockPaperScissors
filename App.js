import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { GameStatus } from './components/GameStatus';
import { PlayerCard } from './components/PlayerCard';
import { ButtonGroup } from './components/ButtonGroup';
import { CountTotal } from './components/CountTotal';
import { BottomTab } from './components/BottomTab';
import WelcomeScreen from './components/WelcomeScreen';

import CHOICES from './components/CHOICE';

// PlayGroundScreen to play
class PlayGroundScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      result: 'Lets play',
      countPlayTotal: 0,
      countWonTotal: 0,
      countLostTotal: 0,
      countTieTotal: 0
    }
  }

  onPressButton = (playerChoice) => {
    const { countPlayTotal, countLostTotal, countTieTotal, countWonTotal } = this.state;
    const computerChoice = randomComputerChoice();
    const result = getResult(playerChoice.name, computerChoice.name);
    if (result === 'Victory!') {
      this.setState({
        countWonTotal: countWonTotal + 1,
      })
    }
    else if (result === 'Defeat!') {
      this.setState({
        countLostTotal: countLostTotal + 1,
      })
    }
    else {
      this.setState({
        countTieTotal: countTieTotal + 1
      })
    }
    this.setState({
      playerChoice: playerChoice,
      computerChoice: computerChoice,
      result: result,
      countPlayTotal: countPlayTotal + 1,
    })
  }

  render() {
    const { playerChoice, computerChoice, result, countPlayTotal, countWonTotal, countTieTotal,
      countLostTotal } = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.displayGameStatus}>
          <GameStatus status={result} />
        </View>

        <View style={styles.displayPlayGround}>
          <PlayerCard name='Player' choice={playerChoice} />
          <PlayerCard name='Computer' choice={computerChoice} />
        </View>

        <View style={styles.displayButtonGroup}>
          <ButtonGroup onPressButton={this.onPressButton} />
        </View>

        <View style={styles.bottomTab}>
          <BottomTab />
          <CountTotal
            countPlayTotal={countPlayTotal}
            countWonTotal={countWonTotal}
            countTieTotal={countTieTotal}
            countLostTotal={countLostTotal} />
        </View>

      </View>
    );
  }
}

// AppNavigator
const AppNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  PlayGroundScreen: {
    screen: PlayGroundScreen,
    navigationOptions: {
      header: null
    }
  }
},
  {
    initialRouteName: 'WelcomeScreen'
  }
)
export default createAppContainer(AppNavigator);


const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getResult = (playerChoice, computerChoice) => {
  let result;
  if (playerChoice === 'rock') {
    result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
  }
  if (playerChoice === 'paper') {
    result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (playerChoice === 'scissors') {
    result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  }

  if (playerChoice === computerChoice) result = 'Tie game!';
  return result;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf8c6',
  },
  displayGameStatus: {
    flex: 0.15,
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  displayPlayGround: {
    flex: 0.4,
    marginHorizontal: 20,
    backgroundColor: '#a8d0e6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
  },
  displayButtonGroup: {
    flex: 0.35,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottomTab: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderTopColor: '#DD7A00',
  }
});