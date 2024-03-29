import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { PollScreen } from './components/PollScreen';
import { PollDetailsScreen } from './components/PollDetailsScreen';
import { AppTheme } from './styles/Theme';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainScreen } from "./components/MainScreen";

const Stack = createNativeStackNavigator()

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer theme={AppTheme}>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="NewPoll" component={PollScreen} options={({ navigation }) => ({
              title: 'New Poll',
              headerLeft: () => (
                <Button onPress={() => navigation.navigate('Main')}
                  title="Cancel"
                  color="#617A67" />
              )
            })} />
            <Stack.Screen name="Poll" component={PollDetailsScreen} options={({ navigation }) => ({
              title: 'Poll',
              headerLeft: () => (
                <Button onPress={() => navigation.navigate('NewPoll')} title="Close" color='#617A67' />
              )
            })} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

