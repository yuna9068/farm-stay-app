import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {
  const farm = useState("farm from Home");
  return (
    <View>
      <Text>HomeScreen</Text>
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
