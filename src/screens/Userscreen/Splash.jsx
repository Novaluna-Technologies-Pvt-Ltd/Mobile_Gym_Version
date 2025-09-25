import React, { useEffect } from "react";
import { StyleSheet, Image, View, Animated,Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const { width, height } = Dimensions.get('window');

export default function Splash({ navigation }) {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Navigate after 3s
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient/Background asset */}
      <Image
        source={require("../../../assets/images/Gradient.png")}
        style={styles.gradient}
      />

      {/* Logo fade-in */}
      <Animated.Image
        source={require("../../../assets/images/logo1.png")}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" },

  gradient: {
    position: "absolute",
    bottom: -150,
    width: width,
    height: height,
    resizeMode: "contain",
    opacity: 0.8, // subtle background
  },

  logo: { width: 220, height: 220, marginBottom: 40 },

  
  
});
