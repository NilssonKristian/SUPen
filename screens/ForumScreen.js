import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../components/Footer.js';

const ForumScreen = ({navigation}) =>  {
        return (
            <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#011117']}>
                <View>
                    <Text>Forum Screen</Text>
                    <Text>Här ska man se ett forum som man klickat på.</Text>
                    
                </View>
                <View style={styles.footer}>
                <Footer homeFunction= {() => navigation.navigate('MainScreen')} 
                    messageFunction= {()=> navigation.navigate('InboxScreen')} 
                    settingsFunction={()=> navigation.navigate('SettingsScreen')}/>
                </View>   
            </LinearGradient>
        )
    }

export default ForumScreen;

const styles = StyleSheet.create({
    linearGradient: {
      height: '100%',
      flex:1
    },
    footer: {
        height:50,
        bottom:0,
        width: '100%',
        position: 'absolute'

    }
    
});
