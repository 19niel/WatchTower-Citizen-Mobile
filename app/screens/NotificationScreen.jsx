// app/screens/HomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity   } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Dito</Text>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: '#071025',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },  profileIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    zIndex: 1, // Ensure the icon is above other elements
  },
});
