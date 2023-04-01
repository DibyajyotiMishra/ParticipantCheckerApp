import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ScanScreen from "../screens/ScanScreen";

export type StackNavigatorProps = {
  Home: undefined;
  Scan: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorProps>();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Scan' component={ScanScreen} />
    </Stack.Navigator>
  );
}
