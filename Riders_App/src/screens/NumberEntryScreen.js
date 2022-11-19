import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  useWindowDimensions,
  Platform,
  Pressable,
} from 'react-native';
import {PlaceholderTextField} from '../components/InputFields';
import LinearGradient from 'react-native-linear-gradient';
import ButtonLarge from '../components/Buttons';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData} from '../redux/AuthSlice';

function NumberEntryScreen({navigation}) {
  const [text, setText] = useState('');
  const {width, height} = useWindowDimensions();
  const horizontalLength =
    width > height ? (Platform.OS === 'ios' ? 110 : 110) : 150;
  const VerticalLength =
    width > height ? (Platform.OS === 'ios' ? 110 : 110) : 150;
  const dispatch = useDispatch();
  const authData = useSelector(state => state.auth);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Pressable onPress= {()=>{
          navigation.goBack()
        }}>
          <Image
            style={styles.back_pic}
            source={require('../assets/images/back_arrow.png')}
          />
        </Pressable>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <Image
              style={styles.blueCircle}
              source={require('../assets/images/blueCircle.png')}
            />
            <Image
              style={[
                styles.mobilePic,
                {height: horizontalLength, width: VerticalLength},
              ]}
              source={require('../assets/images/contact-book.png')}
            />
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 0.45}}
              colors={['#fbe5d4', 'rgba(255,255,255,0)']}
              style={styles.gradient}>
              <PlaceholderTextField
                name="sample"
                placeholder="Enter your Mobile number"
                keyboardType="numeric"
                value={text}
                onChangeText={value => setText(value)}
              />
            </LinearGradient>
            <View style={{alignSelf: 'center'}}>
              <ButtonLarge
                onPress={() => {
                  dispatch(setUserData({mobile: text}));
                  navigation.navigate('Otp');
                }}
                title="SUBMIT"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back_pic: {
    marginTop: 16,
    marginLeft: 19,
  },

  gradient: {
    marginTop: 30,
    height: 180,
    width: 321,
    borderRadius: 13,
    alignSelf: 'center',
  },

  blueCircle: {
    width: 246,
    height: 86,
    marginTop: 11,
    alignSelf: 'center',
  },

  textView: {
    backgroundColor: '',
  },

  mobilePic: {
    alignSelf: 'center',
  },
});

export default NumberEntryScreen;
