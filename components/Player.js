import React from 'react';
import {Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Player = ({navigation}) => {
  return (
    
    <SafeAreaView style={{
        flex:1,
        backgroundColor: '#FFFFFF',
        
    }}>
      <TouchableOpacity onPress={() => {
        navigation.goBack()
      }}
      style={{
        marginLeft:340,
        marginTop:10,
        marginBottom:-10
      }}>
        <Icon name="close-outline" style={{ fontSize: 28 }} />
      </TouchableOpacity>
      <StatusBar backgroundColor = "#FF6D26" barStyle = "dark-content" />
      <View style={{
        flex:1,
        alignItems: 'center',
        marginTop: 30,
        height: 40
      }}>
        <View>
            <Image style={{
            }} source={require('../img/image/songcover.png')} />
        </View>

        <View style={{
            flexDirection:'row',
            alignItems: 'center',
            justifyContent:'space-between',
            width:390,
            height:60,
            paddingHorizontal:40,
            marginTop: 20
        }}>
        <Icon name="add-circle-outline" style={{color: "#000", }} size={25} />
        <View>
        <Text style={{
            textAlign: 'center',
            justifyContent:"center",
            alignItems:'center',
            fontSize: 20,
            color: "#000",
            fontWeight:"700",
        }}>All Mine
        </Text>
        </View>               
        <Icon name="heart-outline" style={{color: "#000", }} size={25} />                           
        </View>
        <Text style={{
            marginTop:-10,
            textAlign: 'center',
            justifyContent:"center",
            alignItems:'center',
            fontStyle: 'italic',
            fontSize: 16,
            color: "#000",
            fontWeight:"700",
            color: "#FF6D26",
        }}>Kanye West
        </Text>
        <View>
          <Slider
            style={{
              width:335,
              height:20,
              marginTop:35,
              flexDirection: 'row',
              marginLeft: 20
            }}
            value={10}
            minimumValue={20}
            maximumvalua={100}
            thumbTintColor="#FF6D26"
            minimumTrackTintColor="#FF6D26"
            maximumTrackTintColor="#000"
            onSlidingComplete={()=>{}}
            
            
          />

          <View style={{
            marginLeft:35,
            width:308,
            flexDirection:'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{
              fontWeight:'700',
              fontSize:12,
              color: "#1F1F1F",
              fontStyle: 'italic',
            }}>
              1:30
            </Text>
            <Text style={{
              fontWeight:'700',
                fontSize:12,
              color: "#1F1F1F",
              fontStyle: 'italic',
            }}>
              3:00
            </Text>
          </View>

          <View style={{
            flexDirection: 'row',
            width: '80%',
            marginLeft: 35,
            justifyContent: 'space-between',
            marginTop:35,
          }}>
            <TouchableOpacity>
              <Icon name='sync-outline' size={30} color="#383838" style={{marginTop:15}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='play-skip-back-outline' size={35} color="#383838" style={{marginTop:15}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='play-circle-outline' size={70} color="#FF7634" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='play-skip-forward-outline' size={35} color="#383838" style={{marginTop:15}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='shuffle' size={30} color="#383838" style={{marginTop:15}}/>
            </TouchableOpacity>
          </View>

          <View style={{
            marginTop:35
          }}>
            <Image
              style={{
                resizeMode:'cover',
                width:390,
                height:100,
            }}
            source={require('../img/image/Adv.png')}/>
          </View>
      </View>
      </View>
      
      
      
    </SafeAreaView>
  );
};


export default Player;


