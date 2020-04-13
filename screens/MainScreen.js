import React, { Component } from 'react'
import Footer from '../components/Footer.js';

export class MainScreen extends Component {
    render() {
        return (
            <div>
                <text>Main Screen!</text>'
                <text>Denna sida ska agera som en "wall" för det man vill se.</text>
                <Footer />
            </div>
        )
    }
}

export default MainScreen
