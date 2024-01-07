import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { QuestionGroup } from './components/QuestionGroup';
import { DetailsScreen } from './components/DetailsScreen';
import { AppTheme } from './styles/Theme';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator initialRouteName="Home" backgroundColor="">
        <Stack.Screen name="Home" component={QuestionGroup} options={{
          title: 'New Poll',
          headerRight: () => (
            // Should be disabled if: 
            // 1. A question is not provided
            // 2. There are less than 2 options available
            // 3. Inputs do not exceed their text limit
            <Button onPress={() => alert('TODO: Give an alert saying poll submitted Redirect back to home screen')}
              title="Send"
              color='#617A67'
            />
          ),
          headerLeft: () => (
            <Button onPress={() => alert('TODO: Redirect back to home screen')}
              title="Cancel"
              color="#617A67" />
          )
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
