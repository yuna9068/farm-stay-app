import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as ImageHelpers from '../helpers/ImageHelpers.js';

export default function DetailScreen(props) {
  const farm = props.route.params.farm;
  return (
    <ScrollView style={styles.scrollView}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    lineHeight: 22,
    color: '#003e80',
    marginBottom: 10,
  },
});
