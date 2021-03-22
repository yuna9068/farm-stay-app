import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';

export default function NavRegion(props) {
  const regionList = props.data;
  const [selectedItem, setSelectedItem] = useState('全部');
  const regionItem = ({item}) => (
    <Text
      style={[styles.item, (item === selectedItem) ? styles.selected : '']}
      onPress={()=>selectRegion(item)}
    >{ item }</Text>
  );

  /**
   * 選擇縣市地區
   *
   * @param {string} countyName - 縣市名稱
   */
  function selectRegion(countyName) {
    setSelectedItem(countyName);
    props.fnChangeRegion(countyName);
  }

  return (
    <View style={styles.regionView}>
      <FlatList
        data={regionList}
        renderItem={regionItem}
        keyExtractor={(item) => item}
        numColumns={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  regionView: {
    borderBottomWidth: 3,
    borderBottomColor: '#eeeeee',
    backgroundColor: '#ffffff',
  },
  item: {
    fontSize: 18,
    color: '#000000',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    letterSpacing: 2,
    width: '25%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: '#007bff',
    color: '#ffffff'
  },
});
