import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';

import Footer from '../components/Footer.js';

const ForumHomeScreen = ({ navigation }) => {
        return (
            <View>
                <Text>Forum Home Screen!</Text>
                <Text>Här ska man se alla sina forum.</Text>
                <Footer />
            </View>
        )
    }

export default ForumHomeScreen;
