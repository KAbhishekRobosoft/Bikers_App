import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StarComponent0} from '../components/StarComponent';
import ButtonLarge from '../components/Buttons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

const windowWidth = Dimensions.get('screen').width;

const ServiceCenterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [time, setTimer] = useState(new Date());

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const route = useRoute();
  console.log(route.params.ele);
  return (
    <SafeAreaView style={styles.main}>
      <Image
        style={styles.img}
        source={{uri: 'https' + route.params.ele.dealerImage.substring(4)}}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={styles.backBtn}
          name="arrow-left"
          size={24}
          color="#ED7E2B"
        />
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <View style={styles.ratingComponent}>
          <StarComponent0 />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.textView1}>
            <Text style={styles.text1}>{route.params.ele.dealerName}</Text>
            <Text style={styles.text2}>
              {route.params.ele.dealerDistance
                ? route.params.ele.dealerDistance
                : 0 + 'km'}
            </Text>
          </View>
          <Text style={styles.text3}> {route.params.ele.dealerAddress}</Text>
          <Text style={styles.text3}>
            {' '}
            {route.params.ele.dealerCity},Karnataka
          </Text>
          <Text style={styles.text4}>{route.params.ele.dealerDescription}</Text>
          <Text style={styles.text4}>
            {' '}
            +91 {route.params.ele.dealerPhoneNumber}
          </Text>
        </View>
        <View style={styles.btn}>
          <ButtonLarge title="CHECK SLOT" onPress={() => setOpen1(true)} />
          <DatePicker
            mode="date"
            modal
            minimumDate={new Date()}
            open={open1}
            date={date}
            onConfirm={value => {
              setDate(value);
              setOpen1(false);
              setOpen2(true);
            }}
            onCancel={() => {
              setOpen1(false);
            }}
          />
          <DatePicker
            mode="time"
            modal
            minimumDate={new Date()}
            open={open2}
            date={date}
            onConfirm={value => {
              setDate(value);
              setOpen2(false);
            }}
            onCancel={() => {
              setOpen2(false);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceCenterScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
    //backgroundColor: 'grey',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 250,
    position: 'absolute',
    top: '4%',
    alignSelf: 'center',
    backgroundColor: 'grey',
  },
  backBtn: {
    paddingLeft: 20,
    marginTop: 5,
    bottom: 1,
  },
  scrollView: {
    marginTop: 220,
    width: '100%',
  },
  textContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 130,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  ratingComponent: {
    marginTop: 20,
    paddingHorizontal: 22,
  },
  textView1: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    color: '#ED7E2B',
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    lineHeight: 28,
    height: 30,
  },
  text2: {
    color: '#6F6D6D',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  text3: {
    color: '#6F6D6D',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    alignSelf: 'flex-start',
    lineHeight: 21,
  },
  text4: {
    color: '#6F6D6D',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    alignSelf: 'flex-start',
    lineHeight: 18,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
