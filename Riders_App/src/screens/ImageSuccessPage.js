import React,{useState} from 'react';
import {SafeAreaView,View,Image,StyleSheet,Text} from 'react-native'
import ButtonLarge from '../components/Buttons';

function ImageSuccessPage() {
  const [image, setImage] = useState(true);
  return (
    <SafeAreaView style={styles.success_con}>
    <View style= {styles.success_subcon}>
    <Image style={styles.backArrow} source= {require('../assets/images/back_arrow.png')} />
      {image && 
        <Image
          style={styles.rUserImg}
          source={require('../assets/images/photoless.png')}
        />
      }
      {!image && (
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 246, height: 86}}
            source={require('../assets/images/blueCircle.png')}
          />
          <View style={{width:"100%",height:140,flexDirection:"row",justifyContent:"center"}}>
            <Image style={styles.rUserImg1} source={{uri: image}} />
            <Image style={{width:40,height:40,marginRight:marginRight,alignSelf:"flex-end",marginBottom:10}} source= {require('../assets/images/green_tick.png')} />
          </View>
        </View>
      )}
        <Text style={styles.sucText1}>Awesome</Text>
        <Text style={styles.sucText2}>Lets move on and make some</Text>
        <Text style={styles.sucText3}>crazy trips</Text>
        <View style={styles.butView}>
                <ButtonLarge title="LETS GET STARTED" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  rUserImg: {
    height: 180,
    width: 246,
    marginTop: 13,
  },

  butView:{
    marginTop:39
  },

  success_con:{
    flex:1,
  },

  sucText1:{
    marginTop: 42,
    lineHeight: 23,
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
    color: '#4F504F',
  },

  sucText2:{
    lineHeight: 24,
    fontSize: 16,
    color: '#4F504F',
  },

  sucText3:{
    lineHeight: 24,
    fontSize: 16,
    color: '#4F504F',
  },

  backArrow:{
      alignSelf:"flex-start",
      marginLeft:19,
      marginTop:16
  },

  success_subcon:{
    flex:1,
    alignItems:"center"
  },

  rUserImg1: {
    borderRadius: 80,
    height: 133,
    width: 133,
  },
})

export default ImageSuccessPage;
