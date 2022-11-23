import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import MapNavBar, {
  MapBottomBar,
  MapChatButton,
} from '../components/MapDisplayItmes';

const MapDisplayScreen = () => {
  const [musicControlState, setMusicControlState] = useState(false);

  const {height, width} = useWindowDimensions();
  const top = width > height ? (Platform.OS === 'ios' ? '8%' : '8%') : '300%';

  const musicControl = () => {
    setMusicControlState(!musicControlState);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <MapNavBar />
        <MapChatButton />
        <View style={[styles.bottomContainer, {top}]}>
          <MapBottomBar
            musicControl={musicControl}
            musicControlIcon={
              musicControlState ? 'ios-pause-sharp' : 'ios-play'
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    marginTop: '30%',
  },
});

export default MapDisplayScreen;
