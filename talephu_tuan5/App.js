import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen01 from "./src/screens/Screen01";
import Screen02 from "./src/screens/Screen02";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }} />
        <Stack.Screen name="Screen02" component={Screen02} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


