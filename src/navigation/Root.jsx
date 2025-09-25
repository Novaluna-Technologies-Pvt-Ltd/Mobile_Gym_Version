import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Splash from "../screens/Userscreen/Splash";
import Onboarding from "../screens/Userscreen/Onboarding";
import HomePage from "../screens/Userscreen/HomePage";

// Auth Screens
import FullName from "../screens/Userscreen/Auth/FullName";
import GymLocation from "../screens/Userscreen/Auth/GymLocation";
import EmergencyContact from "../screens/Userscreen/Auth/EmergencyContact";
import Gender from "../screens/Userscreen/Auth/Gender";

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="FullName" component={FullName} />
      <Stack.Screen name="GymLocation" component={GymLocation} />
      <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
      <Stack.Screen name="Gender" component={Gender} />

      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}
