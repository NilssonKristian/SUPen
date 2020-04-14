//ifall det löser sig med facebookgodkännandet. Skapa då en klass som exporterar en knapp och anropar denna metoden

const isLoggedIn = false;
 
  logIn = async () =>  {
    try {
      await Facebook.initializeAsync('517567899159230');
      
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      
    } = await Facebook.logInWithReadPermissionsAsync({
        //inom permissions så läggar man senare till vad som ska sparas från användaren ex ", 'email', 'user_name'"
        permissions: ['public_profile', 'first_name', 'last_name','id'], 
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const { picture, name, birthday } = await response.json();
        isLoggedIn = true;
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
