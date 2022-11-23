import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  useWindowDimensions,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PopUpMenu = () => {
  const [visible, setVisible] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;

  const options = [
    {
      title: 'Group Info',
      action: () => alert('Group info'),
    },
    {
      title: 'Notifications',
      action: () => alert('Notifications'),
    },
    {
      title: 'Clear Chat',
      action: () => alert('Clear Chat'),
    },
  ];

  const {height, width} = useWindowDimensions();
  const left = width > height ? (Platform.OS === 'ios' ? '85%' : '80%') : '71%';

  const resizeBox = to => {
    to === 1 && setVisible(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(() => to === 0 && setVisible(false));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => resizeBox(1)}>
        <Icon
          name="ellipsis-vertical"
          color={'white'}
          size={30}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Modal
        transparent
        visible={visible}
        supportedOrientations={['portrait', 'landscape']}>
        <SafeAreaView style={{flex: 1}} onTouchStart={() => resizeBox(0)}>
          <Animated.View
            style={[
              styles.popupContainer,
              styles.header,
              styles.shadow,
              {left},
              {transform: [{scale}]},
            ]}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} onPress={option.action}>
                <Text style={styles.title}>{option.title}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '6%',
  },
  header: {
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  popupContainer: {
    height: 124,
    width: 115,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: '#4E4E4E',
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});

export default PopUpMenu;
