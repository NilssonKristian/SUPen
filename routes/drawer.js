import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack.js';
import SettingsStack from './settingsStack.js';
import MainStack from './mainStack.js';
import InboxStack from './inboxStack.js';
import ForumStack from './forumStack.js';
import ForumHomeStack from './forumHomeStack.js';
import MessageStack from './messageStack.js';

// Skapar en Drawernavigation med metoden createDrawerNavigation. Skickar med olika 'stacks' till de 'screens' som finns i applikationen.
const RootDrawerNavigator = createDrawerNavigator({
    //Home ska tas bort framöver. Vi kan också lägga om ordningen på skärmarna om vi vill det
    Home: {
        screen: HomeStack,
        //navigationOptions:{
        // drawerLockMode: 'locked-closed' kommer användas sen så man inte kan öppna hamburgaren på första-sidan
        // }
    },
    Settings: {
        screen: SettingsStack
    },
    Main:{
        screen: MainStack
    },
    Inbox:{
        screen: InboxStack
    },
    Forum:{
        screen: ForumStack
    },
    ForumHome:{
        screen:ForumHomeStack
    },
    Message:{
        screen:MessageStack
    }
});

export default createAppContainer(RootDrawerNavigator);
