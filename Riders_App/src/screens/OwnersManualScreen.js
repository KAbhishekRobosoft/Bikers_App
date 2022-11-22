import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonLarge from '../components/Buttons';
import {DropDownInputField} from '../components/InputFields';

const OwnersManualScreen = ({navigation}) => {
  const [selected, setSelected] = useState();

  const data = [
    {
      key: 'Classic 350-Black',
      value: 'Classic 350-Black',
    },
    {
      key: 'Splender',
      value: 'Splender',
    },
    {
      key: 'KTM DUKE-200',
      value: 'KTM DUKE-200',
    },
  ];
  return (
    <SafeAreaView>
      <View style={[styles.header, styles.shadow]}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="arrow-left"
            color={'white'}
            size={16}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Owners Manual</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.dropDrowView}>
          <DropDownInputField
            data={data}
            values={selected}
            setSelected={value => setSelected(value)}
            placeholder="Vehicle Type"
          />
        </View>
        <View style={styles.btn}>
          <ButtonLarge
            title="Go"
            onPress={() => navigation.navigate('OwnersManualDetailScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OwnersManualScreen;

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
    marginLeft: 25,
    fontFamily: 'Roboto-Medium',
  },
  icon: {
    marginHorizontal: 20,
  },
  scrollView: {
    height: '90%',
  },
  btn: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  dropDrowView: {
    width: '80%',
    alignSelf: 'center',
  },
});
