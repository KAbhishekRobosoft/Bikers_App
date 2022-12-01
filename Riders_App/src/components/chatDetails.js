import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export const SenderChatDetails = ({chat}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginLeft: '35%',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: '2%',
          }}>
          <Image
            source={require('../assets/images/checkmark.png')}
            style={{height: 13, width: 13}}
          />
          <Text style={styles.timeText}>{chat.time.substring(11,16)}</Text>
        </View>
        <View style={styles.senderContainer}>
          <Text style={styles.senderText}>{chat.chat}</Text>
        </View>
      </View>
    </View>
  );
};

export const ReceiverContainer = ({chat}) => {
  return (
    <View>
            <View style={styles.container}>
              <View style={{top: 20}}>
                <Image
                  source={{uri: 'https'+ chat.senderImage.substring(4)}}
                  style={styles.profile}
                />
                <Text style={styles.riderName}>{chat.senderName}</Text>
              </View>
              <View style={styles.recivercontainer}>
                <Text style={styles.senderText}>{chat.chat}</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '3%',
                }}>
                <Image
                  source={require('../assets/images/checkmark.png')}
                  style={{height: 13, width: 13}}
                />
                <Text style={styles.timeText}>{chat.time.substring(11,16)}</Text>
              </View>
            </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '30%',
    marginTop: '5%',
  },
  recivercontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 18,
    backgroundColor: '#ADADAD',
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
    borderTopLeftRadius: 37,
    paddingHorizontal: '5%',

    marginLeft: 20,
  },
  profile: {
    backgroundColor: '#D8D8D8',
    borderWidth: 2,
    borderColor: '#C8C7C7',
    borderRadius: 25,
    height: 50,
    width: 50,
    marginBottom: 20,
  },

  riderName: {
    color: '#7F7F7F',
    fontFamily: 'Roboto',
    fontSize: 12,
  },
  senderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: '8%',
    padding: 18,
    marginLeft: '3%',
    backgroundColor: '#4EB5F4',
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 45,
    borderTopLeftRadius: 45,
    marginTop: 20,
    paddingHorizontal: '5%',
  },

  senderText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    letterSpacing: 0.8,
  },

  timeText: {
    color: '#7F7F7F',
    fontSize: 12,
    fontFamily: 'Roboto',
  },
});
