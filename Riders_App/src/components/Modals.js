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

export const GroupInfoModal = (props) => {
    console.log(props.isVisible)
    return (
        <SafeAreaView>
            <Modal isVisible={props.isVisible}>
                <View>
                    <Text>i am modal</Text>
                </View>
            </Modal>
        </SafeAreaView>
    );
}