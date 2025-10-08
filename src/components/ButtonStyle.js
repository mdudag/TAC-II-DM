import React from 'react';
import { View, Button } from 'react-native';

export default function ButtonStyle({ title, onPress }) {
    return (
        <View style={{ marginRight: 10 }}>
            <Button title={title} color='#8DD5E9' onPress={onPress} />
        </View>
    );
}
