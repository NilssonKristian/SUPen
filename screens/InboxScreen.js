import 'react-native-gesture-handler';
import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../components/Footer.js';

const InboxScreen = ({navigation}) => {
        return (
            <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#011117']}>
            <View>
                <Text>Inbox Screen</Text>
                <Text>Här ska man se alla sin konversationer man har.</Text>
                <Footer />
            </View>
            </LinearGradient>
        )
    }

export default InboxScreen;

const styles = StyleSheet.create({
    linearGradient: {
      height: '100%'
    }})
