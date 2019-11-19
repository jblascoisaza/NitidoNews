import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import MBienvenida from '../components/MBienvenida';
import CupertinoButton from '../components/CupertinoButton';

export default function Bienvenido() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MBienvenida style={styles.mBienvenida} />
      <CupertinoButton style={styles.cupertinoButton} />
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
    marginTop: 375,
    alignSelf: 'center',
  },
  cupertinoButton: {
    width: 100,
    height: 44,
    marginTop: 76,
    alignSelf: 'center',
  },
});
