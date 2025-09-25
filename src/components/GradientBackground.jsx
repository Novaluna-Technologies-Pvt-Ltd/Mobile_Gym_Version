import React from "react";
import { ImageBackground, StyleSheet } from "react-native";


const gradientOverlay = require("../../assets/images/Gradage.png");

const GradientBackground = ({ children }) => {
  return (
    <ImageBackground
      source={gradientOverlay}
      style={styles.gradientBackground}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    zIndex:1,
    opacity:0.8
  },
});

export default GradientBackground;
