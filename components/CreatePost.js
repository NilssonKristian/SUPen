import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreatePost = ({createPost}) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View style={styles.textContainer}>
            <TextInput placeholder="Skriv inlägg..." style=
            {styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.button} onPress={() => createPost(text)}>
                <View style={styles.buttonContainer}>
                <Text style={styles.postButton}>Skapa inlägg</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.4,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        height: '15%',
        marginHorizontal: 20,
        marginTop: '4%',
    },
    postButton: {
        color: '#fff',
    },
    buttonContainer: {
        width: 120,
        borderRadius: 8,
        backgroundColor: '#203F58',
        padding: 9,
        alignItems: 'center',
        marginTop: '10%',
        marginLeft: '1%'
    }
});

export default CreatePost;