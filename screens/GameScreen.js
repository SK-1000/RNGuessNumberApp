import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';



function generateRandomBetween(min, max, exclude) {
const rndNum = Math.floor(Math.random() * (max - min)) + min;

if (rndNum === exclude)
{ return generateRandomBetween(min, max, exclude);
} else {
    return rndNum;
}
}

function GameScreen({userNumber}) {
 const initialGuess = generateRandomBetween(1, 100, userNumber);
 const [currentGuess, setCurrentGuess] = useState();

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            
             {/* GUESS */}
             
        <View>
            <Text>Higher or lower?</Text>
            {/* +
            - */}
        </View>
        {/* <View>LOG ROUNDS</View> */}
        </View>

    );

}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding:12
    }


})