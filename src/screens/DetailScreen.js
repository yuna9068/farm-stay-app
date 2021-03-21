import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImageHelpers from '../helpers/ImageHelpers.js';

export default function DetailScreen(props) {
  const farm = props.route.params.farm;
  return (
    <View style={styles.mainView}>
      <Text style={styles.name}>{farm.Name}</Text>
      <Text style={styles.info}>{farm.AddrDisplay}</Text>
      <Text style={styles.info}>{farm.TelDisplay}</Text>
      <Text style={styles.info}>{farm.Content}</Text>
      <Image
        source={ImageHelpers.checkImage(farm.Image)}
        style={{width: 300, height: 300}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  info: {
    color: '#003e80',
    marginBottom: 5,
  },
});
