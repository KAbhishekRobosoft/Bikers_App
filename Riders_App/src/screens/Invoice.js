import React from 'react';
import {
  View,
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import InvoiceItem from '../components/InvoiceItemPrice';
import {useRoute} from '@react-navigation/native';
import {month1} from '../utils/Functions';

const Invoice = ({navigation}) => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../assets/images/back_arrow.png')}
              style={styles.backicon}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../assets/images/download.png')}
              style={styles.icon}
            />
          </Pressable>
        </View>
        <View style={{}}>
          <ImageBackground
            source={require('../assets/images/whitesheet.png')}
            style={styles.backgroundImage}>
            <View style={styles.maintextContainer}>
              <View>
                <Text style={styles.invoiceText}>Invoice</Text>
                <Text style={styles.dateText}>{route.params.date.substring(8, 10)} {month1[route.params.date.substring(5, 7)]}, {route.params.date.substring(0, 4)}</Text>
              </View>
              <Text style={styles.billNo}>#0162</Text>
            </View>
            <Text style={styles.ruppesText}>Rs 4,000/-</Text>
            <View style={styles.statusContainer}>
              <Image
                source={require('../assets/images/checkmark.png')}
                style={{height: 17, width: 17, marginRight: 2}}
              />
              <Text style={styles.statusText}>Paid</Text>
            </View>
            <Text style={styles.designtext}>
              {' '}
              ————————————————————————————————{' '}
            </Text>
            <View style={styles.ProducttextContainer}>
              <Text style={styles.productText}>PRODUCT</Text>
              <View style={styles.unitContainer}>
                <Text style={styles.productText}>UNIT</Text>
                <Text style={styles.productText}>PRICE</Text>
              </View>
            </View>
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />
            <InvoiceItem />

            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalText}>TOTAL</Text>
              <Text style={styles.totalText}>4000/-</Text>
            </View>
            <Text style={styles.designtext}>
              {' '}
              ————————————————————————————————{' '}
            </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },

  backicon: {
    tintColor: '#ED7F2C',
    color: '#ED7F2C',
    height: 18,
    width: 18,
  },

  icon: {
    height: 23,
    width: 26,
  },

  backgroundImage: {
    height: 650,
    shadowColor: 'rgba(175,170,170,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 5,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 30,
  },

  maintextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: '6%',
  },

  invoiceText: {
    height: 28,
    lineHeight: 28,
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#5B5B5B',
  },

  dateText: {
    height: 16,
    lineHeight: 19,
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#5B5B5B',
    marginBottom: 5,
    letterSpacing: 0,
    fontWeight: '500',
  },

  billNo: {
    height: 16,
    lineHeight: 19,
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#B8B8B8',
    marginBottom: 5,
    letterSpacing: 0,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
  },

  ruppesText: {
    height: 40,
    lineHeight: 40,
    fontSize: 30,
    fontFamily: 'Roboto',
    color: '#ED7F2C',
    letterSpacing: 0,
    textAlign: 'center',
    marginTop: 50,
  },
  statusContainer: {
    borderRadius: 13,
    borderColor: '#19B692',
    alignSelf: 'center',
    borderWidth: 1,
    height: 28,
    width: '22%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  statusText: {
    height: 28,
    lineHeight: 28,
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#1CB18F',
    alignSelf: 'center',
  },
  designtext: {
    height: 19,
    lineHeight: 19,
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#C0C0C0',
    marginBottom: 5,
    letterSpacing: 0,
    opacity: 0.44,
    marginHorizontal: '5%',
    marginTop: 15,
  },

  ProducttextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '6%',
    alignItems: 'center',
  },

  productText: {
    height: 16,
    lineHeight: 19,
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'rgba(184,184,184,0.87)',
    letterSpacing: 0,
    fontWeight: '500',
  },

  unitContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },

  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '6%',
    marginTop: 30,
  },

  totalText: {
    height: 16,
    lineHeight: 19,
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#5B5B5B',
    letterSpacing: 0,
    fontWeight: '500',
  },
});

export default Invoice;
