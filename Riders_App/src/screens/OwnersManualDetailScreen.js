import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonLarge from '../components/Buttons';
import TopNavigation from '../utils/TopNavigation';

const OwnersManualDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={[styles.header, styles.shadow]}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="arrow-left"
            color={'white'}
            size={20}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Owners Manual</Text>
        <View style={styles.headerIcons}>
          <Pressable
            onPress={() => {
              navigation.navigate('OwnerManualEditScreen');
            }}>
            <Icon name="pencil" color={'white'} size={24} style={styles.icon} />
          </Pressable>
          <Pressable>
            <Image
              style={styles.shareImg}
              source={require('../assets/images/share.png')}
            />
          </Pressable>
        </View>
      </View>
        <TopNavigation/>
    </SafeAreaView>
  );
};

export default OwnersManualDetailScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    height: 64,
    backgroundColor: '#ED7E2B',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 5,
    opacity: 0.9,
    paddingHorizontal: 15,
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
    marginRight: '18%',
    fontFamily: 'Roboto-Medium',
  },

  scrollView: {
    height: '90%',
    paddingVertical:10
  },
  shareImg: {
    width: 24,
    height: 27,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    marginRight: 0,
    width: '22%',
    justifyContent: 'space-between',
  },
});
