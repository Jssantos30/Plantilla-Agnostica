import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginForm from "./src/components/Auth/LoginForm";
import RegisterUser from "./src/components/Auth/RegisterUser";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RecoverPassword from "./src/components/Auth/RecoverPassword";
import Home from "./src/components/home/Home";
import Account from "./src/screens/Account";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="RegisterUser" component={RegisterUser} />
          <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}