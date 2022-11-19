import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

function NumberEntryScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex:1}}>
        <Image
          style={styles.back_pic}
          source={require('../assets/images/back_arrow.png')}
        />
        <View style={{flex:1}}>
        <Image
          style={styles.blueCircle}
          source={require('../assets/images/blueCircle.png')}
        />
        <Image
          style={styles.mobilePic}
          source={require('../assets/images/contact-book.png')}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back_pic: {
    marginTop: 16,
    marginLeft: 19,
  },

  blueCircle: {
    width: 246,
    height: 86,
    marginTop: 11,
    alignSelf:"center"
  },

  mobilePic: {
    width: 150,
    height: 170,
    alignSelf:"center"
  },
});

export default NumberEntryScreen;
