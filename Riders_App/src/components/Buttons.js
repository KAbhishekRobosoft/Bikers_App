import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

 const ButtonLarge = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#ED7E2B', '#F4A264']}
        style={styles.gradient}>
        <Pressable style={styles.btn}>
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};
export default ButtonLarge;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.9,
  },
  gradient: {
    height: 42,
    width: 279,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
});

