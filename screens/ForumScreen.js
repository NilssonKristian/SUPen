import React, { Component } from 'react'
import {View, Text} from 'react-native';

import Footer from '../components/Footer.js';

export class ForumScreen extends Component {
    render() {
        return (
            <View>
                <Text>Forum Screen</Text>
                <Text>Här ska man se ett forum som man klickat på.</Text>
                <Footer />
            </View>
        )
    }
}

export default ForumScreen
