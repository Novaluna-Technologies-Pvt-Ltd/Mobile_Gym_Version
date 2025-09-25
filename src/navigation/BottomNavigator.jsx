import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const BottomNavigator = ({ onBack, onNext }) => {
  const backIcon = require('../../assets/icons/back.png');
  const nextIcon = require('../../assets/icons/front.png');

  return (
    <View style={styles.navWrapper}>
      {/* Back button */}
      <TouchableOpacity style={styles.navButton} onPress={onBack}>
        <Image source={backIcon} style={styles.iconImage} />
      </TouchableOpacity>

      {/* Progress bar */}
       <View style={styles.progress}>
        {Array(6)
         .fill(null)
         .map((_, idx) => (
      <View key={idx} style={styles.dash} />
        ))}
      </View>

      {/* Next button */}
      <TouchableOpacity style={styles.navButton} onPress={onNext}>
        <Image source={nextIcon} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navWrapper: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#222',
  },
  navButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dash: {
    height: 3,
    borderRadius: 2,
    backgroundColor: '#fff', 
    width:24,
  },
  
});

export default BottomNavigator;
