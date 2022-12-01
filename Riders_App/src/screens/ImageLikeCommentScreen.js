import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  Animated,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {deSetLoading, setLoading} from '../redux/MileStoneSlice';
import {addLike, getParticularPhoto} from '../services/Auth';
import {getVerifiedKeys} from '../utils/Functions';

const ImageLikeCommentScreen = ({navigation, route}) => {
  const [comments, Setcomments] = useState(false);
  const [like, setLike] = useState(false);
  const [likeView, setLikeView] = useState(false);
  const [imgData, setImgData] = useState({});
  useEffect(() => {
    dispatch(deSetLoading());
    setTimeout(async () => {
      const cred = await getVerifiedKeys(authData.userToken);
      const response = await getParticularPhoto(cred, route.params.id);
      console.log('response-----', response);
      setImgData(response);
      dispatch(setLoading());
      // console.log('response-----', imgData);
    });
  }, []);
  const {height, width} = useWindowDimensions();
  const top = width > height ? (Platform.OS === 'ios' ? '80%' : '80%') : '95%';
  const loading = useSelector(state => state.milestone.isLoading);
  const authData = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const likeAdd = async () => {
    const cred = await getVerifiedKeys(authData.userToken);
    await addLike(cred, imgData.photos._id);
  };
  // console.log('&&&&&-----', imgData.photos?.likedBy.map(e=>e.));

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  const position = new Animated.ValueXY({x: 0, y: 50});
  Animated.timing(position, {
    toValue: {x: 0, y: 0},
    duration: 400,
    useNativeDriver: true,
  }).start();
  const position1 = new Animated.ValueXY({x: 0, y: 100});
  Animated.timing(position1, {
    toValue: {x: 0, y: 100},
    duration: 700,
    useNativeDriver: true,
  }).start();

  return (
    <SafeAreaView style={styles.main}>
      {JSON.stringify(imgData) !== '{}' ? (
        <>
          <View style={styles.header}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon
                name="md-arrow-back"
                color="grey"
                size={25}
                style={styles.icon}
              />
            </Pressable>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                //source={require('../assets/images/appicon.png')}
                source={{uri: route.params.image}}
              />
              <View style={styles.likeCommentView}>
                <View
                  style={{
                    flexDirection: 'row',
                    //borderWidth: 1,
                    width: 68,
                    justifyContent: 'space-between',
                  }}>
                  <Pressable
                    onPress={() => {
                      setLikeView(!likeView);
                      Setcomments(false);
                    }}>
                    <Text style={styles.text}>
                      {imgData.photos.likeCount} Likes
                    </Text>
                  </Pressable>

                  {imgData.liked ? (
                    <Pressable onPress={() => likeAdd()}>
                      <Icons
                        name="heart"
                        color="red"
                        size={18}
                        //style={styles.icon}
                      />
                    </Pressable>
                  ) : (
                    <Pressable onPress={() => likeAdd()}>
                      <Icons
                        name="heart-o"
                        color="grey"
                        size={18}
                        //style={styles.icon}
                      />
                    </Pressable>
                  )}
                </View>
                <Pressable
                  onPress={() => {
                    Setcomments(!comments);
                    setLikeView(false);
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 130,
                      borderWidth: 0,
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      //borderWidth:1
                    }}>
                    <Text style={styles.text}>
                      {' '}
                      {imgData.photos.commentCount} Comments
                    </Text>
                    <Icons
                      name="comment"
                      color="grey"
                      size={18}
                      //style={styles.icon}
                    />
                  </View>
                </Pressable>
              </View>
              {comments ? (
                <Animated.View
                  style={[
                    {
                      height: 200,
                      // borderWidth: 1,
                      width: '100%',
                      alignSelf: 'center',
                      transform: [
                        {translateX: position.x},
                        {translateY: position.y},
                      ],
                      backgroundColor: 'black',
                      borderRadius: 20,
                      marginVertical: 15,
                      shadowColor: 'rgba(142,142,142,0.5)',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowRadius: 4,
                      shadowOpacity: 0.9,
                      elevation: 4,
                      opacity: 0.9,
                      borderRadius: 20,
                      marginVertical: 15,
                    },
                    styles.bottomshadow,
                  ]}>
                  <ScrollView
                    style={{padding: 5, borderWidth: 0}}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {imgData.photos.distinctComment?.length > 0 &&
                      imgData.photos.distinctComment.map(item => {
                        return (
                          <View
                            style={{
                              flexDirection: 'row',
                              borderBottomWidth: 1,
                              margin: 10,
                              height: 45,
                              paddingHorizontal: 10,
                            }}>
                            <Image
                              style={{
                                height: 40,
                                width: 40,
                                borderRadius: 30,
                              }}
                              source={require('../assets/images/card.jpg')}
                              // source={{uri:"https"+item.profileImage.substring(4)}}
                            />
                            <View style={{marginLeft: 20}}>
                              <Text
                                style={{
                                  fontWeight: 'bold',
                                  fontFamily: 'Roboto-Regular',
                                  color: '#ED7E2B',
                                }}>
                                {/* //Name{item.userName} */}
                              </Text>
                              <Text
                                style={{
                                  fontFamily: 'Roboto-Regular',
                                  color: '#ED7E2B',
                                }}>
                                {/* // Comment by {item.userName} */}
                              </Text>
                            </View>
                          </View>
                        );
                      })}
                  </ScrollView>
                </Animated.View>
              ) : null}
              {likeView ? (
                <Animated.View
                  style={[
                    {
                      height: 200,
                      width: '100%',
                      alignSelf: 'center',
                      transform: [
                        {translateX: position.x},
                        {translateY: position.y},
                      ],
                      shadowColor: 'rgba(142,142,142,0.5)',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowRadius: 4,
                      shadowOpacity: 0.9,
                      elevation: 4,
                      opacity: 0.9,
                      borderRadius: 20,
                      marginVertical: 15,
                    },
                    styles.bottomshadow,
                  ]}>
                  <ScrollView
                    style={{paddingHorizontal: 10, }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    {imgData.photos.likedBy?.length > 0
                      ? imgData.photos.likedBy.map(item => {
                          return (
                            <View
                              key={item._id}
                              style={{
                                flexDirection: 'row',
                                borderBottomWidth: 1,
                                margin: 5,
                                alignItems: 'center',
                                height: 45,
                                paddingHorizontal: 10,
                              }}>
                              <Text
                                style={{
                                  fontWeight: 'bold',
                                  fontFamily: 'Roboto-Regular',
                                  marginLeft: 20,
                                  color: '#ED7E2B',
                                }}>
                                {item.likedName}
                              </Text>
                            </View>
                          );
                        })
                      : null}
                  </ScrollView>
                </Animated.View>
              ) : null}
            </View>

            <Animated.View
              style={[
                styles.bottomContainer,
                styles.bottomshadow,
                {
                  transform: [
                    {translateX: position1.x},
                    {translateY: position1.y},
                  ],
                },
              ]}>
              <View style={styles.iconContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Comment"
                  placeholderTextColor="grey"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: '2%',
                }}>
                <Pressable>
                  <Image
                    source={require('../assets/images/send.png')}
                    style={{height: 48, width: 48}}
                  />
                </Pressable>
              </View>
            </Animated.View>
          </ScrollView>
        </>
      ) : null}
    </SafeAreaView>
  );
};

export default ImageLikeCommentScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 40,
    justifyContent: 'center',
  },
  imgContainer: {
    height: 550,
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    //borderWidth: 1,
  },
  img: {
    height: '66%',
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    borderColor: 'grey',
    //resizeMode: 'contain',
  },
  icon: {
    marginHorizontal: 20,
  },
  bottomContainer: {
    height: 60,
    marginHorizontal: '6%',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(142,142,142,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.9,
    elevation: 4,
    opacity: 0.9,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    marginBottom: 140,
    //marginTop: 100,
    //position: 'absolute',
    //top:500
    //bottom:0
  },
  bottomshadow: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
    elevation: 5,
  },
  input: {
    color: '#7F7F7F',
    fontSize: 16,
    fontFamily: 'Roboto',
    letterSpacing: 0.8,
    marginLeft: '3%',
    width: '80%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '3%',
    width: '72%',
  },
  likeCommentView: {
    //borderWidth: 1,
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    alignSelf: 'flex-end',
    //alignItems: 'flex-end',
  },
  text: {
    color: 'grey',
    fontFamily: 'Roboto-Regular',
  },
  textLike: {
    color: '#FF5C4D',
    fontFamily: 'Roboto-Regular',
  },
  textComment: {
    color: '#FF9636',
    fontFamily: 'Roboto-Regular',
  },
});
