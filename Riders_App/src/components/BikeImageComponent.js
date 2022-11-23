import React from 'react';
import {useSelector} from 'react-redux';
import {View,StyleSheet,Image} from 'react-native'

function BikeImageComponent() {
  const data = useSelector(state => state.contact.addTripContacts);

  return (
    <>
      {data.length === 1 ? (
        <View style={styles.rating}>
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
        </View>
      ) : null}
      {data.length === 2 ? (
        <View style={styles.rating}>
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
        </View>
      ) : null}
      {data.length === 3 ? (
        <View style={styles.rating}>
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
        </View>
      ) : null}
      {data.length === 4 ? (
        <View style={styles.rating}>
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
        </View>
      ) : null}
      {data.length === 5 ? (
        <View style={styles.rating}>
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
          <Image style={{marginLeft:10}} source={require('../assets/images/contactsUser.png')} />
        </View>
      ) : null}
    </>
  );
}

const styles= StyleSheet.create({
    rating:{
        flexDirection:"row"
    }
})
export default BikeImageComponent;
