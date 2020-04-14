import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack.js";
import SettingsStack from "./settingsStack.js";
import MainScreen from "../screens/MainScreen.js";
import InboxScreen from '../screens/InboxScreen.js';

// Skapar en Drawernavigation med metoden createDrawerNavigation. Skickar med olika 'stacks' till de 'screens' som finns i applikationen.
const RootDrawerNavigator = createDrawerNavigator({
  //Denna kommer att ändras när vi väll har fått in fler "sidor" i projektet
  Home: {
    screen: HomeStack,
    //navigationOptions:{
    // drawerLockMode: 'locked-closed' kommer användas sen så man inte kan öppna hamburgaren på första-sidan
    // }
  },
  Settings: {
    screen: SettingsStack,
  }
});

export default createAppContainer(RootDrawerNavigator);
