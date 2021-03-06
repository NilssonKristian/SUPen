import React from "react";
import Footer from "../components/Footer.js";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MainScreen = ({navigation}) => {
        return (
            <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#011117']}>
            <View>
                <View>
                <Text>Main Screen!</Text>
                <Text>Denna sida ska agera som en "wall" för det man vill se.</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Footer homeFunction= {() => navigation.navigate('MainScreen')} 
                messageFunction= {()=> navigation.navigate('InboxScreen')} 
                settingsFunction={()=> navigation.navigate('SettingsScreen')}/>
            </View>
            </LinearGradient>
        );
    }

export default MainScreen;

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
