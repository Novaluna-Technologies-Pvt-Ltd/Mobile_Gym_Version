import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import BottomNavigator from "../../../navigation/BottomNavigator";
import FooterNote from "../../../components/FooterNote";

const Gender = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const gradientOverlay = require("../../../../assets/images/Gradgen.png");
  const otherIcon = require("../../../../assets/icons/other.png"); 
  const TickIcon =require("../../../../assets/icons/tick.png")

  const genders = [
    { label: "Male", icon: <Icon name="male-outline" size={20} color="#9CA3AF" /> },
    { label: "Female", icon: <Icon name="female-outline" size={20} color="#9CA3AF" /> },
    { label: "Other", icon: <Image source={otherIcon} style={styles.imageIcon} /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Absolute background gradient */}
      <Image
        source={gradientOverlay}
        style={styles.gradientBackground}
        resizeMode="cover"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>How do you identify?</Text>
        <Text style={styles.subtitle}>
          This helps us personalize your experience better. If you prefer not
          to say, that’s totally fine too.
        </Text>
      </View>

      {/* Gender Options */}
      <View style={styles.optionsContainer}>
        {genders.map((item) => {
          const isSelected = selectedGender === item.label;
          return (
            <TouchableOpacity
              key={item.label}
              onPress={() => setSelectedGender(item.label)}
              style={styles.optionWrapper}
              activeOpacity={0.9}
            >
              {isSelected ? (
                <LinearGradient
                  colors={["#7550F6", "#2AD787"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientBorder}
                >
                  <View style={styles.option}>
                    <View style={styles.optionContent}>
                      {/* clone icon with white when selected */}
                      {item.label === "Other"
                        ? <Image source={otherIcon} style={[styles.imageIcon, { tintColor: "#fff" }]} />
                        : React.cloneElement(item.icon, { color: "#fff" })}
                      <Text style={[styles.optionText, { color: "#fff" }]}>{item.label}</Text>
                    </View>
                    <Icon> <Image source={TickIcon} style={styles.TickIcon}/></Icon>
                  </View>
                </LinearGradient>
              ) : (
                <View style={styles.option}>
                  <View style={styles.optionContent}>
                    {item.icon}
                    <Text style={styles.optionText}>{item.label}</Text>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <FooterNote />

      <BottomNavigator
        totalSteps={6}
        onBack={() => navigation.goBack()}
        onNext={() => navigation.navigate("Age")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

  gradientBackground: {
    position: "absolute",
    top: 20, // 👈 below header
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity:0.6,
  },

  header: { marginTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: "700", color: "#fff", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#9CA3AF", lineHeight: 20 },

  optionsContainer: { marginTop: 60, paddingHorizontal: 20, gap: 12 },

  optionWrapper: { borderRadius: 10, overflow: "hidden" },
  gradientBorder: { borderRadius: 10, padding: 1 },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#444",
  },
  optionContent: { flexDirection: "row", alignItems: "center", gap: 10 },
  optionText: { fontSize: 16, color: "#9CA3AF" },

  imageIcon: { width: 20, height: 20, resizeMode: "contain", tintColor: "#9CA3AF" },
  
  TickIcon: { width: 20, height: 20, resizeMode: "contain" },
});

export default Gender;
