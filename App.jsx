import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BootSplash from "react-native-bootsplash";
import Root from "./src/navigation/Root";

export default function App() {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
