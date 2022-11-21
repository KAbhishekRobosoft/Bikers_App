import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export const StarComponent0 = ({rating}) => {
  return (
    <View style={styles.rating}>
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
    </View>
  );
};
export const StarComponent1 = () => {
  return (
    <View style={styles.rating}>
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
    </View>
  );
};
export const StarComponent2 = () => {
  return (
    <View style={styles.rating}>
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
    </View>
  );
};
export const StarComponent3 = () => {
  return (
    <View style={styles.rating}>
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
    </View>
  );
};
export const StarComponent4 = () => {
  return (
    <View style={styles.rating}>
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star2.png')}
      />
    </View>
  );
};
export const StarComponent5 = () => {
  return (
    <View style={styles.rating}>
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
      <Image
        style={styles.ratingImg}
        source={require('../assets/images/Star1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingImg: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  rating: {
    flexDirection: 'row',
    marginLeft: '5.5%',
    height: 20,
    width: '30%',
    justifyContent: 'space-between',
  },
});
