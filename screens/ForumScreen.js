import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import CreatePost from '../components/CreatePost.js';
import PostItem from '../components/PostItem.js';
import Footer from '../components/Footer.js';

export default function ForumScreen({ navigation }) {

    const [items, setItems] = useState([

    ]);

    const createPost = (text) => {
        setItems(prevItems => {
            return [{ text }, ...prevItems]
        });
    }

    return (
        <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#011117']}>
            <CreatePost createPost={createPost} />
            <FlatList data={items} renderItem={({ item }) => <PostItem item={item} />} />
            <View style={styles.footer}>
                <Footer homeFunction= {() => navigation.navigate('MainScreen')} 
                messageFunction= {()=> navigation.navigate('InboxScreen')} 
                settingsFunction={()=> navigation.navigate('SettingsScreen')}/>
            </View>
        </LinearGradient>
    );
}

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

