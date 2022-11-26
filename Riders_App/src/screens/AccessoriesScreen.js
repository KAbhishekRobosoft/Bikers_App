import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {AccessoriesData} from '../assets/data';
import {useDispatch, useSelector} from 'react-redux';
import {selectLiked} from '../redux/AccessoriesSlice';
import {selectUnLiked} from '../redux/AccessoriesSlice';
import {filterAccessories} from '../redux/AccessoriesSlice';
import {searchProducts} from '../services/Auth';
import {LikeProducts} from '../services/Auth';
import {addAccessoriesData} from '../redux/AccessoriesSlice';
import {addLiked} from '../redux/AccessoriesSlice';
import {disLiked} from '../redux/AccessoriesSlice';
import { getVerifiedKeys } from '../utils/Functions';

export const Accessories = ({navigation}) => {

  const [text, setText] = useState('');
  const accessories = useSelector(state => state.shop.accessoriesData);
  const dispatch = useDispatch();
  const auth= useSelector(state=>state.auth)

  const handleSearch = async value => {
    setText(value);
    const key= await getVerifiedKeys(auth.userToken)
    const Data = await searchProducts(value,key);
    const trimmedData = Data.map(ele => {
      let liked = false;
      if (ele.likedBy.length > 0) {
        liked = true;
      }
      return {
        _id: ele._id,
        productImage: ele.productImage,
        productName: ele.productName,
        productPrice: ele.productPrice,
        likedBy: ele.likedBy,
        liked: liked,
      };
    });
    dispatch(addAccessoriesData(trimmedData));
  };


  const handleLike = async items => {
    const key= await getVerifiedKeys(auth.userToken)
    const product = await LikeProducts(items._id,key);
    dispatch(addLiked(items));
  };

  const handleUnLike = async items => {
    const key= await getVerifiedKeys(auth.userToken)
    const product = await LikeProducts(items._id,key);
    dispatch(disLiked(items));
  };

  return (
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
        <Text style={styles.headerText}>Accessories</Text>
      </View>
      <View style={styles.container}>
        {text ? (
          <View style={styles.form1}></View>
        ) : (
          <View style={styles.form}></View>
        )}
        <View>
          <>
            {text ? (
              <View style={styles.placeholder}>
                <Text style={styles.text}>What do you want?</Text>
              </View>
            ) : (
              <></>
            )}
          </>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            name="search"
            placeholder="What do you want?"
            placeholderTextColor={'rgba(141,138,138,0.87)'}
            onChangeText={text => handleSearch(text)}
            style={styles.textInput}
          />
          <Image
            source={require('../assets/images/search.png')}
            style={styles.search}
          />
        </View>
      </View>

      {text ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 20}}>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {accessories.length > 0 ? accessories.map(item => {
              // console.log(item.likedBy)
              return (
                <View style={styles.mainView} key={item._id}>
                  <View style={styles.subView}>
                    <Text style={styles.dateText}>18 NOV</Text>
                    {!item.liked ? (
                      <Pressable onPress={() => handleLike(item)}>
                        <FontAwesome
                          name="thumbs-up"
                          color={'rgba(150,75,0,0.5)'}
                          size={18}
                          solid={false}
                        />
                      </Pressable>
                    ) : (
                      <Pressable onPress={() => handleUnLike(item)}>
                        <FontAwesome
                          name="thumbs-up"
                          color={'rgba(150,75,0,0.5)'}
                          size={18}
                          solid={true}
                        />
                      </Pressable>
                    )}
                  </View>
                  <Image
                    source={{uri: 'https' + item.productImage.substring(4)}}
                    style={styles.image}
                  />
                  <View style={styles.costTitleText}>
                    <Text style={styles.titleText}>{item.productName}</Text>
                    <Text style={styles.costText}>Rs{item.productPrice}/-</Text>
                  </View>
                </View>
              );
            }):null}
          </View>
        </ScrollView>
      ) : (
        <>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: '50%',
              fontFamily: 'Roboto-Medium',
              fontSize: 30,
            }}>
            Search Something!!
          </Text>
        </>
      )}
    </SafeAreaView>
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
  textInput: {
    color: '#4F504F',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    height: 21,
    width: '78%',
    paddingBottom: 3,
  },
  form1: {
    marginTop: Platform.OS === 'ios' ? 14 : 15,
  },

  form: {
    marginTop: Platform.OS === 'ios' ? 40 : 30,
  },
  text: {
    height: 17,
    color: Platform.OS === 'ios' ? '#9F9F9F' : '#9F9F9F',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Roboto-Regular',
  },
  search: {
    marginHorizontal: '14%',
    tintColor: 'rgba(0,0,0,0.54)',
    marginTop: -2,
  },
  container: {
    marginHorizontal: 40,
    flexDirection: 'column',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#B4B3B3',
  },
  placeholder: {
    marginTop: 7,
  },
  mainView: {
    borderWidth: 1,
    height: 200,
    width: '50%',
    borderColor: 'rgba(150,75,0,0.15)',
  },
  subView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: 'rgba(150,75,0,0.5)',
  },
  image: {
    resizeMode: 'contain',
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginTop: 20,
  },
  costTitleText: {
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    height: 40,
  },
  titleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: 'rgb(175,50,0)',
  },
  costText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: 'rgb(249, 105, 14)',
  },
});
