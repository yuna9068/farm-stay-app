import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DetailScreen(props) {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>props.route.params.farm: { props.route.params.farm }</Text>
      <Button
        title="前往 HomeScreen"
        onPress={() => props.navigation.pop()}
      />
    </View>
  );
}
