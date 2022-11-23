import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ReceiverContainer, SenderChatDetails} from '../components/chatDetails';
import PopUpMenu from '../components/PopUpMenu';

const ChatScreen = () => {
  const [inputChat, setInputChat] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.header, styles.shadow]}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="md-arrow-back"
            color={'white'}
            size={25}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Reunion Manali</Text>
        <PopUpMenu />
      </View>

      <ImageBackground
        source={require('../assets/images/chat.png')}
        style={styles.image}></ImageBackground>

      <SenderChatDetails />
      <ReceiverContainer />
      <SenderChatDetails />
      <ReceiverContainer />
      <SenderChatDetails />
      <ReceiverContainer />
      <View style={[styles.bottomContainer, styles.bottomshadow]}>
        <View style={styles.iconContainer}>
          <Pressable>
            <Image
              source={require('../assets/images/smile.png')}
              style={{height: 30, width: 30}}
            />
          </Pressable>
          <TextInput
            style={styles.input}
            onChangeText={setInputChat}
            value={inputChat}
            placeholder="Type a Message"
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable>
            <Image
              source={require('../assets/images/document.png')}
              style={{height: 27, width: 24, marginRight: 10}}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../assets/images/send.png')}
              style={{height: 48, width: 48}}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 64,
    backgroundColor: '#ED7E2B',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    opacity: 0.9,
    justifyContent: 'space-between',
  },
  shadow: {
    backgroundColor: '#ED7E2B',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: '0%',
    fontFamily: 'Roboto-Medium',
    right: '90%',
  },
  icon: {
    marginHorizontal: 20,
  },
  bottomContainer: {
    height: 60,
    marginHorizontal: '6%',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(142,142,142,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 4,
    opacity: 0.9,
    position: 'absolute',
    width: '90%',
    top: '95%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomshadow: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  input: {
    color: '#7F7F7F',
    fontSize: 16,
    fontFamily: 'Roboto',
    letterSpacing: 0.8,
    marginLeft: '3%',
    width: '80%',
  },

  image: {
    height: 341,
    width: 427,
    top: '50%',
    position: 'absolute',
    right: '2%',
    opacity: 0.9,
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '3%',
    width: '72%',
  },
});

export default ChatScreen;
