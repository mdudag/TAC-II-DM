import React from 'react';
import { View, Button } from 'react-native';
import { styles, cores } from '../styles/styles'; // Importa cores

export default function Rodape() {
  return (
    <View style={styles.rodape}>
      <View style={{ marginRight: 10 }}>
        <Button title=' 🏚️ ' color={cores.azul} />
      </View>
      <View style={{ marginRight: 10 }}>
        <Button title=' 🗺️ ' color={cores.azul} />
      </View>
      <View style={{ marginRight: 10 }}>
        <Button title=' 📋 ' color={cores.verde} />
      </View>
      <View style={{ marginRight: 10 }}>
        <Button title=' ✏️ ' color={cores.azul} />
      </View>
      <View style={{ marginRight: 10 }}>
        <Button title=' 👤 ' color={cores.azul} />
      </View>
    </View>
  );
}