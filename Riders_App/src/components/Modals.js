import React from 'react';
import {StyleSheet, View, Text, Pressable, ScrollView} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

export const Modals = props => {
  return (
    <Modal isVisible={props.isVisible} style={{alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: 'white',
          height: 416,
          width: 322,
          borderRadius: 17,
        }}>
        <Pressable onPress={props.press}>
          <View style={styles.iconTimes}>
            <Icon2 name="close" size={27} color={'#A4A4A4'} />
          </View>
        </Pressable>
        <Text style={styles.modalHeader}>{props.title}</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Text style={styles.modalDescription}>{props.text}</Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  iconTimes: {
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  modalHeader: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    lineHeight: 35,
    color: '#4F504F',
    alignSelf: 'center',
    marginTop: 10,
  },
  modalDescription: {
    fontFamily: 'Roboto-Regular',
    color: '#727070',
    lineHeight: 20,
    fontSize: 14,
    alignSelf: 'center',
    marginHorizontal: 40,
    marginTop: 13,
    paddingBottom: 20,
    textAlign:'justify'
  },
});
