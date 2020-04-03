import React, { Component } from 'react';
import{StyleSheet, Image, View,TouchableOpacity } from 'react-native';


export default class Footer extends Component {

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.messageFunction}>
                    <View style={styles.footerMessage}>
                        <Image source={require('../assets/messageButton.png')}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.homeFunction}>
                    <View style={styles.footerHome}>
                        <Image source={require('../assets/homeButton.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.settingsFunction}>
                    <View style={styles.footerSettings}>
                        <Image source={require('../assets/settingsButton.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
        );

    }
   
}
const styles = StyleSheet.create ({
    container: {
        flex:1,
        flexDirection: "row",
        backgroundColor: '#184A73',
        height:35,
        justifyContent:'space-between'
    },
    footerHome:{
        marginTop:7

    },
    footerSettings:{
        marginTop:7,    
        marginRight:60
    },
    footerMessage:{
        marginTop:7,
        marginLeft:60
        

    }
        
});
