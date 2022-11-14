import React from 'react'
import {Pressable,View,Text,StyleSheet} from 'react-native'

function SmallButton({name,onPress}) {
  return (
            <View>
                <Pressable onPress= {onPress}>
                    <Text style={styles.smallButText}>
                        {name}
                    </Text>
                </Pressable>
            </View>
  )
}

const styles= StyleSheet.create({
    smallButText:{
        color:"#F2944E",
        lineHeight:21,
        fontFamily:"Roboto-Medium",
        fontSize:16,
    }
})
export default SmallButton