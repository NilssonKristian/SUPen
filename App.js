import 'react-native-gesture-handler';
import React from 'react';

import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import { AppLoading, Asset, Font, Icon } from "expo";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';
import ForumScreen from './screens/ForumScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#184A73' },
        headerTitleStyle: {
          fontSize: 35,
          color: '#76AAD2',
          shadowColor: 'black',
          shadowOffset: { width: 5, height: 0 },
          shadowOpacity: 0.8
        }
      }}>
        {/* initialParams={{ itemId: 42 }} kan användas för att sätta en initial parameter till en navigation  */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Schoolio' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrering' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Inställningar' }} />
        <Stack.Screen name="Forum" component={ForumScreen} options={{ title: 'Forum' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUserId: undefined,
//       client: undefined,
//       isLoadingComplete: false
//     };
//     this._loadClient = this._loadClient.bind(this);
//   }

//   componentDidMount() {
//     this._loadClient();
//   }

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <View style={styles.container}>
//           {Platform.OS === "ios" && <StatusBar barStyle="default" />}
//           <AppNavigator />
//         </View>
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Font.loadAsync({
//         ...Icon.Ionicons.font,
//         "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
//       })
//     ]);
//   };

//   _handleLoadingError = error => {
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };

//   _loadClient() {
//     Stitch.initializeDefaultAppClient("appenforstudenten-rgprh").then(client => {
//       this.setState({ client });
//       this.state.client.auth
//         .loginWithCredential(new AnonymousCredential())
//         .then(user => {
//           console.log(`Successfully logged in as user ${user.id}`);
//           this.setState({ currentUserId: user.id });
//           this.setState({ currentUserId: client.auth.user.id });
//         })
//         .catch(err => {
//           console.log(`Failed to log in anonymously: ${err}`);
//           this.setState({ currentUserId: undefined });
//         });
//     });
//   }
// }


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#184A73',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  headerText: {
    fontSize: 40,
    color: '#76AAD2',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.8
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 200,
    width: 200,
    marginTop: 50,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.6
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 30,
    fontSize: 35,
    color: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5
  },
  linearGradient: {
    height: '100%'
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  facebookLogInButton: {
    backgroundColor: '#3366ff',
    height: 50,
    width: 225,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5
  },
  ORULogInButton: {
    backgroundColor: '#203F58',
    height: 50,
    width: 225,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});