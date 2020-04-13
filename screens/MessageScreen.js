import React, { Component } from 'react'

import Footer from '../components/Footer.js';

export class MessageScreen extends Component {
    render() {
        return (
            <div>
                <text>Message Screen!</text>
                <text>Här ska man se en konversation med en eller flera deltagare.</text>
                <Footer />
            </div>
        )
    }
}

export default MessageScreen
