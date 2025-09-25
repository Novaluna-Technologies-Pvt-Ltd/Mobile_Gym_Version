import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneInput from "react-native-phone-number-input";
import BottomNavigator from "../../../navigation/BottomNavigator";
import FooterNote from "../../../components/FooterNote";

const { width } = Dimensions.get("window");

const EmergencyContact = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient background at the top */}
      <ImageBackground
        source={require("../../../../assets/images/Gradcon.png")} 
        style={styles.gradientBackground}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Who should we reach out to in an emergency?
          </Text>
          <Text style={styles.subtitle}>
            We’d love to call you by your name. Please enter your full name
          </Text>
        </View>
      </ImageBackground>

      {/* Phone Input */}
      <View style={{ marginTop: 20 }}>
             <PhoneInput
             defaultValue={phoneNumber}
             defaultCode="IN"
             layout="first"
              withShadow={false}
              withDarkTheme
              autoFocus={false}
              containerStyle={styles.phoneInputContainer}
              textContainerStyle={styles.textInput}
              textInputStyle={{ color: "#fff", fontSize: 16 }}
              codeTextStyle={{ color: "#fff", fontSize: 16 }}
              flagButtonStyle={{ marginLeft: -35 }}
              countryPickerProps={{ withFlag: true }}
              onChangeFormattedText={(text) => {
                setPhoneNumber(text);
              }}
            />

      </View>

      {/* Footer text */}
      <FooterNote/>

      {/* Bottom Navigation */}
      <BottomNavigator
        totalSteps={6}
        onBack={() => navigation.goBack()}
        onNext={() => navigation.navigate("Gender")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

  gradientBackground: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    opacity:1
    
  },

  header: { marginTop: 20 },
  title: { fontSize: 22, fontWeight: "700", color: "#fff", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#9CA3AF", lineHeight: 20 },

  phoneInputContainer: {
    width: width -40,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 8,
    backgroundColor: "transparent",
    height: 55,
  },
  textInput: {
    backgroundColor: "transparent",
    borderRadius: 8,
    paddingVertical: 0,
  },

  
});

export default EmergencyContact;
