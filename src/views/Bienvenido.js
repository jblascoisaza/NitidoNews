import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import MBienvenida from '../components/MBienvenida';

export default function Bienvenido() {
  return (
    <View style={styles.container}>
      <MBienvenida style={styles.mBienvenida} />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mBienvenida: {
    width: 206,
    height: 24,
    marginTop: 436,
    alignSelf: 'center',
  },
});
