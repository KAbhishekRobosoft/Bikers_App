import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { ButtonLarge } from '../components/Buttons';
const Register = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.header}>
            <Text>Register</Text>
        </View>
        <ButtonLarge title = 'REGISTER'/>
      </SafeAreaView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 64,
        borderWidth: 2,
    }
})