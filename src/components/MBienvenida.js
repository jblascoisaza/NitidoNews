import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MBienvenida(propse) {
  return (
    <View style={[styles.container, propse.style]}>
      <Text style={styles.mBienvenidaText}>Bienvenido a Nitido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  mBienvenidaText: {
    color: '#121212',
    fontSize: 24,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
  },
});
