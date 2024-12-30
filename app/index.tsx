import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
} from 'react-native';


const diceImages: Record<number, any> = {
  1: require('../assets/images/1.png'),
  2: require('../assets/images/2.png'),
  3: require('../assets/images/3.png'),
  4: require('../assets/images/4.png'),
  5: require('../assets/images/5.png'),
  6: require('../assets/images/6.png'),
};


const backgroundImage = require('../assets/images/background3.jpeg');

const randomNo = (min = 1, max = 6) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getDiceNo = (prev: number): number => {
  let num = randomNo();
  if (prev === num) {
    return randomNo();
  }
  return num;
};

export default function App() {
  const [firstDice, setFirst] = React.useState(3);
  const [secondDice, setSecond] = React.useState(4);

  const rollDiceOnTap = () => {
    setFirst((prev) => getDiceNo(prev));
    setSecond((prev) => getDiceNo(prev));
  };

  return (
    <ImageBackground style={styles.imageWrap} source={backgroundImage}>
      <View style={styles.container}>
        <View style={styles.diceContainer}>
          <Image style={styles.diceImage} source={diceImages[firstDice]} />
          <Image
            style={[styles.diceImage, styles.lite]}
            source={diceImages[secondDice]}
          />
        </View>

        <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollDiceBtnText} selectable={false}>
            Roll Dice  🎲
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    elevation: 2,
  },
  imageWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  diceImage: {
    marginHorizontal: 10,
    width: 125,
    height: 125,
  },
  lite: {
    opacity: 0.95,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor: '#333',
  },
});
