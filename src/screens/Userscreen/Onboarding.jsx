import React, { useState, useEffect, useRef } from 'react';
import {View,Text,StyleSheet,Dimensions,ScrollView,TouchableOpacity,Animated,StatusBar,Platform,Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';


const { width, height } = Dimensions.get('window');

const Onboarding = ({navigation}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const slides = [
    {
      id: 1,
      title: 'One Membership.Any Gym.Anywhere',
      subtitle:
        'Access all partner gyms without worrying about location restrictions',
      type: 'video',
      source: require('../../../assets/videos/onboard.mp4'),
    },
    {
      id: 2,
      title: 'Your Routine ,Your Freedom',
      subtitle:
        'One membership gives you access to every Dokas-connected gym,no matter the city',
      type: 'video',
      source: require('../../../assets/videos/onboard1.mp4'),
    },
    {
      id: 3,
      title: 'Pay once train anywhere',
      subtitle:
        "One membership gives you access to every Dokas-connected gym,no matter the city.",
      type: 'image',
      source: require('../../../assets/images/onboard3.png'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = (prevSlide + 1) % slides.length;

        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 0.7,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();

        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({
            x: nextSlide * width,
            animated: true,
          });
        }

        return nextSlide;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [fadeAnim]);

  const handleScrollEnd = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slideIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Background slider */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
        bounces={false}
        decelerationRate="fast"
      >
        {slides.map((slide, index) => (
          <View key={slide.id} style={styles.slide}>
            {slide.type === 'video' ? (
              <Video
                source={slide.source}
                style={styles.backgroundMedia}
                resizeMode="cover"
                repeat
                muted
              />
            ) : (
              <Image
                source={slide.source}
                style={styles.backgroundMedia}
                resizeMode="cover"
              />
            )}
            <View style={styles.gradientOverlay} />
            <Animated.View
              style={[
                styles.textBox,
                {
                  opacity: index === currentSlide ? fadeAnim : 0.8,
                  transform: [
                    { translateY: index === currentSlide ? 0 : 10 },
                  ],
                },
              ]}
            >
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.subtitle}>{slide.subtitle}</Text>
            </Animated.View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom section */}
      <View style={styles.bottomSection}>
        {/* Progress dots */}
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentSlide
                  ? styles.activeDot
                  : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        {/* Continue buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.phoneButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('FullName')}
          >
            <Text style={styles.phoneIcon}>📱</Text>
            <Text style={styles.phoneButtonText}>Continue with Phone</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            style={styles.googleButton}
            activeOpacity={0.8}
            onPress={() => console.log('Continue with Google')}
          >
            <Text style={styles.googleIcon}>G</Text>
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  slide: { width, height, position: 'relative' },
  backgroundMedia: { width: '100%', height: '100%' },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    opacity:1,
  },
  textBox: {
    position: 'absolute',
    top: height * 0.45,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    lineHeight: 38,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 24,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: 'rgba(0,0,0,0.95)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 28,
    gap: 8,
  },
  dot: { height: 4, borderRadius: 2 },
  activeDot: { width: 24, backgroundColor: '#fff' },
  inactiveDot: { width: 8, backgroundColor: '#666' },
  buttonContainer: { gap: 16 },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
  },
  phoneIcon: { fontSize: 18, marginRight: 8 },
  phoneButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#333' },
  dividerText: {
    color: '#666',
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: '500',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  googleIcon: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#4285F4',
    fontWeight: 'bold',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 8,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
});

export default Onboarding;
