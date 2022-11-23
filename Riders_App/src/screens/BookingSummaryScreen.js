import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  ScrollView,
  TextInput,
  editable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Star} from '../components/StarComponent';

const BookingSummary = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.header]}>
        <View style={styles.subHeader}>
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
          <Text style={styles.headerText}>Booking Details</Text>
        </View>
        <Pressable>
          <Image
            source={require('../assets/images/invoice.png')}
            style={styles.invoiceImage}
          />
        </Pressable>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: '6%'}}>
          <View style={[styles.container, styles.shadow]}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#10B691', '#3EE1BC']}
              style={styles.gradientCreateButton}>
              <Text
                style={{
                  marginLeft: '25%',
                  color: '#ffffff',
                }}>
                Past
              </Text>
            </LinearGradient>
            <View style={styles.textContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: '5%',
                  alignItems: 'center',
                }}>
                <Text style={[styles.dateText, {color: '#ED7F2C'}]}>15</Text>
                <View style={{marginLeft: '5%'}}>
                  <Text style={[styles.monthText, {color: '#ED7F2C'}]}>
                    Nov
                  </Text>
                  <Text style={[styles.yearText, {color: '#ED7F2C'}]}>
                    2017
                  </Text>
                </View>
              </View>
              <View style={styles.line}></View>
              <View style={{justifyContent: 'flex-start', right: 20}}>
                <Text style={styles.serviceText}>General Service</Text>
                <Star rating={0} />
              </View>
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.titleText}>Mobile Number</Text>
              <Text>:</Text>
              <TextInput style={styles.textInputText} editable={editable}>
                809917301
              </TextInput>
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.titleText}>Vehicle Number</Text>
              <Text>:</Text>
              <TextInput style={styles.textInputText} editable={editable}>
                <Text>KA 03F5333</Text>
              </TextInput>
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.titleText}>Service Type</Text>
              <Text>:</Text>
              <TextInput style={styles.textInputText} editable={editable}>
                <Text>General</Text>
              </TextInput>
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.titleText}>Time</Text>
              <Text>:</Text>
              <TextInput style={styles.textInputText} editable={editable}>
                <Text>10:00am</Text>
              </TextInput>
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.titleText}>Dealer</Text>
              <Text>:</Text>
              <TextInput style={styles.textInputText} editable={editable}>
                <Text>Tune Motors</Text>
              </TextInput>
            </View>
            <View style={styles.textInputView}>
              <Text style={styles.titleText}>City</Text>
              <Text>:</Text>
              <TextInput style={styles.textInputText} editable={editable}>
                <Text>Udupi</Text>
              </TextInput>
            </View>
            <View style={styles.textInputCommentView}>
              <Text style={styles.titleTextComment}>Comments</Text>
              <Text style={styles.textInputCommentText}>
                Brake Oil, handle tight and chain lose
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 50,
            }}>
            <Text style={styles.totalText}>Total bill payed</Text>
            <Text style={styles.ruppesText}>Rs 4,000 /-</Text>
            <Text style={styles.totalText}>Rate the Service</Text>
            <Star rating={0} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 64,
    backgroundColor: '#ED7E2B',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
    justifyContent: 'space-between',
    opacity: 0.9,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: '10%',
    fontFamily: 'Roboto-Medium',
  },
  icon: {
    marginHorizontal: 20,
  },
  invoiceImage: {
    marginHorizontal: 25,
    height: 27,
    width: 26,
  },
  container: {
    shadowColor: 'rgba(175,170,170,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.9,
    elevation: 10,
    opacity: 0.9,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,

    marginTop: 20,
  },
  shadow: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
    borderRadius: 10,
  },

  gradientCreateButton: {
    shadowColor: 'rgba(100,100,100,0.5)',
    flexDirection: 'row',
    width: '17%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 27,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 8,
  },
  dateText: {
    fontFamily: 'Roboto Black',
    fontSize: 43,
    fontWeight: '900',
    height: 50,
    lineHeight: 50,
  },
  monthText: {
    fontFamily: 'Roboto Bold',
    fontSize: 18,
  },

  yearText: {
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  line: {
    borderLeftWidth: 1,
    height: 62,
    opacity: 0.17,
    borderColor: '#979797;',
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  serviceText: {
    color: '#6F6D6D',
    fontFamily: 'Roboto',
    fontSize: 12,
    left: '5%',
  },
  textInputView: {
    marginHorizontal: 18,
    paddingTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 3,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
  },
  titleText: {
    paddingBottom: 5,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4F504F',
    width: '35%',
  },
  titleTextComment: {
    marginBottom: 10,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4F504F',
    width: '35%',
  },
  textInputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4F504F',
    width: '27%',
    textAlign: 'right',
  },
  textInputCommentText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4F504F',
    paddingBottom: 10,
  },
  textInputCommentView: {
    marginHorizontal: 25,
    paddingTop: 28,
    paddingEnd: 3,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
  },
  textInputCommentText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4F504F',
    marginBottom: 15,
  },
  textInputCommentView: {
    marginHorizontal: 13,
    paddingTop: 28,
    paddingEnd: 3,
    marginTop: 5,
    borderBottomColor: '#B4B3B3',
    marginBottom: '2%',
  },
  ruppesText: {
    height: 40,
    lineHeight: 40,
    fontSize: 30,
    fontFamily: 'Roboto',
    color: '#ED7F2C',
    letterSpacing: 0,
    textAlign: 'center',
    marginBottom: 10,
  },

  totalText: {
    height: 19,
    lineHeight: 19,
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#5D5E5D',
    letterSpacing: 0,
    textAlign: 'center',
    marginBottom: 7,
  },
});

export default BookingSummary;