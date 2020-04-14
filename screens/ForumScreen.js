import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import CreatePost from '../components/CreatePost.js';
import PostItem from '../components/PostItem.js';


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


        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%'
    }
});

