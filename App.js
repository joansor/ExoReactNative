import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenPageConnexion from "./Screen/ScreenPageConnexion";
import ScreenPageInscription from './Screen/ScreenPageInscription';
import ScreenPageAccueil from './Screen/ScreenPageAccueil';
import ScreenDashboard from './Screen/ScreenDashboard';
import { Provider } from "react-redux";
import Store from './Store/ConfigStore';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Accueil" component={ScreenPageAccueil}/>
        <Stack.Screen name="ConnexionScreen" component={ScreenPageConnexion}/>
        <Stack.Screen name="InscriptionScreen" component={ScreenPageInscription}/>
        <Stack.Screen name="Dashboard" component={ScreenDashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;

