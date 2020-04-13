import React, { Component } from 'react';
import 'react-native-gesture-handler';

import Footer from '../components/Footer.js';

export class ForumHomeScreen extends Component ({ navigation }) {
    render() {
        return (
            <div>
                <text>Forum Home Screen!</text>
                <text>Här ska man se alla sina forum.</text>
                <Footer />
            </div>
        )
    }
}

export default ForumHomeScreen;
