import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigator from "../../../navigation/BottomNavigator";

const { width } = Dimensions.get("window");

const GymLocation = ({ navigation }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Assets
  const gradientOverlay = require("../../../../assets/images/Gradloca.png");
  const locationIcon = require("../../../../assets/icons/location.png");

  // Example locations
  const locations = ["Bengaluru", "Kochi", "Mumbai", "Dubai", "Delhi"];

  // Toggle selection
  const toggleLocation = (loc) => {
    if (selectedLocations.includes(loc)) {
      setSelectedLocations(selectedLocations.filter((item) => item !== loc));
    } else {
      setSelectedLocations([...selectedLocations, loc]);
    }
  };

  // When clicking location icon, add input value to selected
  const addInputLocation = () => {
    if (inputValue.trim() && !selectedLocations.includes(inputValue.trim())) {
      setSelectedLocations([...selectedLocations, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Overlay */}
      <Image
        source={gradientOverlay}
        style={styles.gradientImage}
        resizeMode="cover"
      />

      {/* Title and Subtitle */}
      <View style={styles.header}>
        <Text style={styles.title}>Select Your Preferred Gym Locations</Text>
        <Text style={styles.subtitle}>
          Choose one or more locations where you’d like to work out.
        </Text>
      </View>

      {/* Input with icon */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          placeholderTextColor="#9CA3AF"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity onPress={addInputLocation}>
          <Image source={locationIcon} style={styles.inputIcon} />
        </TouchableOpacity>
      </View>

      {/* Location Chips */}
      <View style={styles.chipsContainer}>
        {locations.map((loc) => (
          <TouchableOpacity
            key={loc}
            style={[
              styles.chip,
              selectedLocations.includes(loc) && styles.chipSelected,
            ]}
            onPress={() => toggleLocation(loc)}
          >
            <Text
              style={[
                styles.chipText,
                selectedLocations.includes(loc) && styles.chipTextSelected,
              ]}
            >
              {loc}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Show Selected Locations */}
      {selectedLocations.length > 0 && (
        <Text style={styles.selectedText}>
          Selected: {selectedLocations.join(", ")}
        </Text>
      )}

      {/* Footer */}
      <Text style={styles.footerText}>
        Your data is only used to personalize your experience, never sold or
        misused.
      </Text>

      {/* Bottom Navigator */}
      <BottomNavigator
        onBack={() => navigation.goBack()}
        onNext={() => navigation.navigate("EmergencyContact")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  gradientImage: {
    position: "absolute",
    top: 0,
    width: width,
    height: 400,
    zIndex: -1,
    opacity: 0.8,
  },
  header: { marginTop: 40, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "700", color: "#fff", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#9CA3AF", lineHeight: 20 },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 20,
    height: 50,
  },
  inputIcon: { width: 20, height: 20, tintColor: "#9CA3AF", marginLeft: 8 },
  input: { flex: 1, fontSize: 16, color: "#fff" },

  chipsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 10,
  },
  chip: {
    backgroundColor: "#FFFFFF1A",
    borderWidth: 1,
    borderColor: "#666",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  chipSelected: {
    backgroundColor: "#2ad787",
    borderColor: "#2ad787",
  },
  chipText: { color: "#fff", fontSize: 14 },
  chipTextSelected: { color: "#000", fontWeight: "600" },

  selectedText: {
    color: "#9CA3AF",
    marginTop: 15,
    textAlign: "center",
    fontSize: 14,
  },

  footerText: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    position: "absolute",
    bottom: 120,
    width: width - 20,
  },
});

export default GymLocation;
