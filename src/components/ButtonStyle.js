import React from 'react';
import { View, Button } from 'react-native';
import { cores } from '../styles/styles'; // Importa cores

export default function ButtonStyle({ title, onPress }) {
  return (
    <View style={{ marginRight: 10 }}>
      <Button title={title} color={cores.azul} onPress={onPress} />
    </View>
  );
}