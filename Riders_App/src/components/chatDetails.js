import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const SenderChatDetails = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View style={styles.senderContainer}>
          <Text style={styles.senderText}>Hi</Text>
        </View>
      </View>
    </View>
  );
};

export const ReceiverContainer = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{top: 20, amarginRight: 20}}>
          <Image
            source={require('../assets/images/smile.png')}
            style={styles.profile}
          />
          <Text style={styles.riderName}>Rob rider</Text>
        </View>
        <View style={styles.recivercontainer}>
          <Text style={styles.senderText}>Hello</Text>
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
    marginRight: '30%',
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
    marginLeft: '30%',
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
});
