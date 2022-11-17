import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ButtonLarge = props => {
  return (
    <Pressable onPress={props.onPress} disabled={props.disabled}>
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ED7E2B', '#F4A264']}
          style={styles.gradient}>
          <Text style={styles.text}>{props.title}</Text>
        </LinearGradient>
      </View>
    </Pressable>
  );
};
export default ButtonLarge;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgba(126,118,118,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10
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
