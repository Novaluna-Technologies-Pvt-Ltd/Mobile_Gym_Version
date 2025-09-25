import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigator from '../../../navigation/BottomNavigator';

const { width } = Dimensions.get('window');

const FullName = ({ navigation }) => {
  const [Name, setName] = useState('');

  const gradientOverlay = require("../../../../assets/images/Gradloca.png");

  return (
    <SafeAreaView style={styles.container}>

      <Image source={gradientOverlay} style={styles.gradientImage} resizeMode="cover" />
      {/* Title and subtitle */}
      <View style={styles.header}>
        <Text style={styles.title}>What’s your full name?</Text>
        <Text style={styles.subtitle}>
          We’d love to call you by your name. Please enter your full name
        </Text>
      </View>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Full name"
        placeholderTextColor="#9CA3AF"
        value={Name}
        onChangeText={setName}
      />

      {/* Footer */}
      <Text style={styles.footerText}>
        Your data is only used to personalize your experience, never sold or
        misused.
      </Text>

      {/* Reusable Bottom Navigation */}
      <BottomNavigator       
        onBack={() => navigation.goBack()}
        onNext={() => navigation.navigate('GymLocation')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
   gradientImage: {
    position: "absolute",
    top: 0,
    width: width,
    height: 400,
    zIndex: -1,
    opacity:0.8,
    
  },
  header: { marginTop: 40, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: '700', color: '#fff', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#9CA3AF', lineHeight: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    padding: 14,
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    position: 'absolute',
    bottom: 120,
    width: width - 20,
  },
});

export default FullName;
