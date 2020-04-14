import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const PostItem = ({ item, IncrementItem }) => {
    return (
        <View style={styles.card}>
            <View style={styles.userName}>
                <Text style={styles.nameText}>Förnamn Efternamn</Text>
            </View>
            <View style={styles.postContent}>
                <Text style={styles.textColor}>
                    <Text>{item.text}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.IncrementItem}>
                    <View style={styles.likeButton}>
                        <Text style={styles.textColor}>Gilla</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.commentButton}>
                        <Text style={styles.textColor}>Kommentera</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.pmButton}>
                        <Text style={styles.textColor}>Skicka PM</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.4,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        height: 200,
        marginHorizontal: 20,
        marginTop: '4%',
    },
    postContent: {
        flex: 0.8,
        flexDirection: 'row'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -50,
        marginHorizontal: 20,
    },
    likeButton: {
        marginVertical: 50,
        marginHorizontal: 0,
        height: 46,
        width: 125,
        borderColor: '#203F58',
        borderWidth: 1,
        borderTopWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0,
        borderLeftWidth: 0
    },
    commentButton: {
        marginVertical: 50,
        marginHorizontal: 0,
        height: 46,
        width: 125,
        borderColor: '#203F58',
        borderWidth: 1,
        borderTopWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0
    },
    pmButton: {
        marginVertical: 50,
        marginHorizontal: 0,
        height: 46,
        width: 125,
        borderColor: '#203F58',
        borderWidth: 1,
        borderTopWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0,
        borderRightWidth: 0
    },
    userName: {

    },
    nameText: {
        color: '#203F58',
        fontWeight: 'bold'
    },
    textColor: {
        color: '#203F58'
    }
});

export default PostItem;