import {React, useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  TextInput,
  ImageBackground,
  useWindowDimensions,
  FlatList,
  RefreshControl,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ReceiverContainer, SenderChatDetails} from '../components/chatDetails';
import PopUpMenu from '../components/PopUpMenu';
import Toast from 'react-native-simple-toast';
import {uploadChatImage} from '../services/Auth';
import ImagePicker from 'react-native-image-crop-picker';
import {getVerifiedKeys} from '../utils/Functions';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GroupInfoModal} from '../components/Modals';
const ChatScreen = ({navigation, route}) => {
  // console.log('id', route.params.id);
  const [refreshing, setRefreshing] = useState(false);
  const [modal1, setmodal1] = useState(false);
  const sendChat = async () => {};
  const authData = useSelector(state => state.auth);
  const groupContact = useSelector(state => state.contact.groupContacts);
  // console.log('group contacts', groupContact);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    if (chat.length > 2) {
      try {
        let response = await fetch(
          'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
        );
        let responseJson = await response.json();
        console.log(responseJson);
        setListData(responseJson.result.concat(chat));
        setRefreshing(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      Toast.show('No more new data available');
      setRefreshing(false);
    }
  }, [refreshing]);

  const [chat, setChat] = useState([
    {
      id: 1,
      groupId: '21',
      senderName: 'sumukh',
      chat: 'boom boom',
      phoneNumber: '8197781176',
      time: '2022-11-28T05:24:01.463Z',
    },
    {
      id: 2,
      groupId: '22',
      senderName: 'prabhal',
      chat: 'boom boom',
      phoneNumber: '8197781175',
      time: '2022-11-28T05:24:01.463Z',
    },
  ]);

  const pickImage = () => {
    console.log(route.params.id);
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(async image => {
      console.log(image.path);

      const payload = new FormData();
      const file = [
        {key: 'id', value: route.params.id},
        {
          key: 'image',
          value: {
            uri: image.path,
            type: image.mime,
            name: `${image.filename}.${image.mime.substring(
              image.mime.indexOf('/') + 1,
            )}`,
          },
        },
      ];
      file.map(ele => {
        payload.append(ele.key, ele.value);
      });
      let cred = await getVerifiedKeys(authData.userToken);
      const resp = await uploadChatImage(payload, cred);
      if (resp !== undefined) {
        Toast.show('Image Posted');
      }
    });
  };

  const handleToggle1 = () => {
    console.log('haii');
    setmodal1(true);
    console.log('modl', modal1);
    // <GroupInfoModal isVisible={modal1}/>
  };

  const {height, width} = useWindowDimensions();
  const top = width > height ? (Platform.OS === 'ios' ? '80%' : '80%') : '95%';

  return (
    <>
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
          <Text style={styles.headerText}>{route.params.tripName}</Text>
          <PopUpMenu
            options={[
              {
                title: 'Group Info',
                action: () => {
                  setmodal1(!modal1);
                },
              },
              {
                title: 'Notifications',
                action: () => {
                  alert('bye');
                },
              },
              {
                title: 'Clear Chat',
                action: () => {
                  alert('cleaned');
                },
              },
            ]}
            color="white"
            size={30}
          />
        </View>

        <ImageBackground
          source={require('../assets/images/chat.png')}
          style={styles.image}></ImageBackground>
        <FlatList
          data={chat}
          renderItem={({item}) => {
            if (item.phoneNumber === '8197781176') {
              return <SenderChatDetails chat={item} />;
            } else {
              return <ReceiverContainer chat={item} />;
            }
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
        <View style={[styles.bottomContainer, styles.bottomshadow, {top}]}>
          <View style={styles.iconContainer}>
            <Pressable>
              <Image
                source={require('../assets/images/smile.png')}
                style={{height: 30, width: 30}}
              />
            </Pressable>
            <TextInput style={styles.input} placeholder="Type a Message" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: '2%',
            }}>
            <Pressable onPress={pickImage}>
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
      {modal1 ? (
        // <Modal isVisible={true}>
        //   {console.log('modal opened')}
        //   <Pressable onPress={handleToggle1}>
        //     <View>
        //       <Text>yghh</Text>
        //     </View>
        //   </Pressable>
        // </Modal>
        <Text>jsdfgdjg</Text>
      ) : null}
    </>
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
    fontFamily: 'Roboto-Medium',
    right: '95%',
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
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
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
