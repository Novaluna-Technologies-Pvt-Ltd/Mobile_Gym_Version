import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const FooterNote = () => {
  return (
    <Text style={styles.footerText}>
      Your data is only used to personalize your experience, never sold or
      misused.
    </Text>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    position: "absolute",
    bottom: 120,
    width: width - 40,
    alignSelf: "center",
  },
});

export default FooterNote;
