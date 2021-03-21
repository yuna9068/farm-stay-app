import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import HomeFarm from '../components/HomeFarm.js';

export default function HomeScreen(props) {
  const [farmList, setFarmList] = useState('');

  useEffect(() => {
    getFarm();
  }, [])

  /**
   * 取得所有農場資料
   */
  function getFarm() {
    const apiFarm = 'https://machi-cat.herokuapp.com/api/farm-stay?max=30';

    fetch(apiFarm)
      .then((response) => response.json())
      .then((responseData) => setFarmList(responseData))
      .catch((error) => {
        console.log('error', error);
      });
  }

  return (
    <View>
      <FlatList
        data={farmList}
        renderItem={(list) => HomeFarm({props, item: list.item})}
        keyExtractor={item => item.ID}
      />
    </View>
  );
}
