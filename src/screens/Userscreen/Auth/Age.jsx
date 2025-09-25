import React, { useState, useRef } from "react";
import {View,Text,StyleSheet,Dimensions,FlatList,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import BottomNavigator from "../../../navigation/BottomNavigator";
import FooterNote from "../../../components/FooterNote";
import GradientBackground from "../../../components/GradientBackground";

const { height } = Dimensions.get("window");
const centerOffset = height * 0.25;
const ITEM_HEIGHT = 50;

const Age = ({ navigation }) => {
  const [selectedAge, setSelectedAge] = useState(25);
  const listRef = useRef(null);

  const ages = Array.from({ length: 100 }, (_, i) => i + 1); // 1–100

  const handleScrollEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    const age = ages[index];
    if (age) setSelectedAge(age);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>How old are you?</Text>
          <Text style={styles.subtitle}>
            Your age helps us understand your health needs better.
          </Text>
        </View>

        {/* Picker Container */}
        <View style={styles.pickerContainer}>
          {/* Left Arrow (static) */}
          <View style={[styles.arrow, { left: 20 }]}>
            <Icon name="caret-forward" size={50} color="#9CA3AF" />
          </View>

          {/* Age List */}
          <FlatList
            ref={listRef}
            data={ages}
            keyExtractor={(item) => item.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
            initialScrollIndex={ages.indexOf(selectedAge)}
            onMomentumScrollEnd={handleScrollEnd}
            contentContainerStyle={{
              paddingVertical: height * 0.25, // centers numbers
            }}
            renderItem={({ item }) => (
              <View style={styles.ageItem}>
                <Text
                  style={[
                    styles.ageText,
                    item === selectedAge && styles.selectedAge,
                  ]}
                >
                  {item}
                </Text>
              </View>
            )}
          />

          {/* Right Arrow (static) */}
          <View style={[styles.arrow, { right: 20 }]}>
            <Icon name="caret-back" size={50} color="#9CA3AF" />
          </View>
        </View>
      </GradientBackground>

      {/* Footer */}
      <FooterNote />

      {/* Bottom Navigation */}
      <BottomNavigator
        totalSteps={6}
        onBack={() => navigation.goBack()}
        onNext={() => navigation.navigate("NextScreen")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

  header: { marginTop: 20 },
  title: { fontSize: 24, fontWeight: "700", color: "#fff", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#9CA3AF", lineHeight: 20 },

  pickerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top:20,
    paddingBottom:140,
  },

  arrow: {
    position: "absolute",
    top:centerOffset,
    zIndex:1,
  },

  ageItem: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  ageText: { fontSize: 24, color: "#666" },
  selectedAge: { fontSize: 34, fontWeight: "bold", color: "#fff" },
});

export default Age;
