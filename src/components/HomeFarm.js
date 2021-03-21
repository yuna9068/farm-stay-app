import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity }from 'react-native';
import * as ImageHelpers from '../helpers/ImageHelpers.js';

export default function HomeFarm({props, item}) {
  return (
    <TouchableOpacity onPress={() => {
      props.navigation.push('Detail', {
      farm: item,
      })
    }}>
      <View style={styles.item}>
        <Image
          source={ImageHelpers.checkImage(item.Image)}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.name}
          >{ item.Name }</Text>
          <Text style={styles.location}>{ item.CountyName + " " +  item.TownshipName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },
  location: {
    fontSize: 18,
  },
});
