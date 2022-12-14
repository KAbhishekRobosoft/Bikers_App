import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

function SmallButton({name, onPress, styleName}) {
  const color = styleName === 'confirmStyle' ? 'white' : '#F2944E';
  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={styles.iconHeader}>
          <Text style={[styles.smallButText, {color: color}]}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  smallButText: {
    lineHeight: 21,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  iconHeader: {
    height: 64,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SmallButton;
