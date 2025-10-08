import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export function ModalItem({ label, text }) {
  return (
    <View style={styles.modalItem}>
      <Text style={styles.modalItemLabel}>
        {label}:<Text style={styles.modalItemText}> {text}</Text>
      </Text>
    </View>
  );
}
