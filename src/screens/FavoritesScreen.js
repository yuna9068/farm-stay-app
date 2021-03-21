import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function FavoritesScreen(props) {
  const farm = useState("farm from Favorites");
  return (
    <View>
      <Text>FavoritesScreen</Text>
      <Button
        title="前往 DetailScreen"
        onPress={() => {
          props.navigation.push('Detail', {
            farm,
          })
        }}
      />
    </View>
  );
}
