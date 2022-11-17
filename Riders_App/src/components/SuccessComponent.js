import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    Pressable,
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/FontAwesome5';
  import ButtonLarge from './Buttons';

  export const Success = (props) => {
    return (
        <SafeAreaView style={styles.main}>
          <View style={styles.header}>
            <Pressable onPress={() => console.log('back')}>
              <Icon name="arrow-left" size={24} color="grey" />
            </Pressable>
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.successImg}
              source={require('../assets/images/blueCircle.png')}
            />
            <Image
              style={styles.greenTick}
              source={require('../assets/images/greenTick.png')}
            />
            <View style={styles.textView1}>
              <Text style={styles.successText}>{props.greet}</Text>
            </View>
            <View style={styles.textView2}>
              <Text style={styles.text}>{props.text2}</Text>
              <Text style={styles.text}>{props.text3}</Text>
            </View>
    
            <View style={styles.btn}>
              <ButtonLarge title="Done" />
            </View>
          </View>
        </SafeAreaView>
      );
  };

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    header: {
      width: '100%',
      height: 60,
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    imgContainer: {
      width: '100%',
      height: '53%',
      alignItems: 'center',
      position: 'relative',
    },
    successImg: {
      width: 290,
      height: 200,
      resizeMode: 'contain',
      marginTop: 10,
    },
    greenTick: {
      width: 97,
      height: 97,
      position: 'absolute',
      top: '27%',
    },
    textView1: {
      marginTop: 20,
      alignItems: 'center',
    },
    textView2: {
      marginTop: 20,
      alignItems: 'center',
    },
    successText: {
      fontSize: 20,
      color: '#575656',
    },
    text: {
      color: '#5F5D5D',
      fontSize: 14,
      marginTop: 5,
    },
  
    btn: {
      position: 'absolute',
      bottom: 0,
    },
  });
  