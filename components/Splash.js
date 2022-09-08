import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../color/color';



const Splash = ({navigation}) => {

  setTimeout(() => {
    navigation.replace('Home')
  },3000)
  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 800}}>
        <Image
          style={{
            flex: 1,
            width: '100%',
          }}
          source={require('../img/image/Splash.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({

});

export default Splash;
