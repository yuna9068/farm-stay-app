import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import HomeFarm from '../components/HomeFarm.js';
import NavRegion from '../components/NavRegion.js';

export default function HomeScreen(props) {
  const [farmList, setFarmList] = useState('');
  const [filterFarmList, setFilterFarmList] = useState('');
  const [searchCondition, setSearchCondition] = useState('');
  const [regionList, setRegionList] = useState('');
  const [displayRegion, setDisplayRegion] = useState(false);

  useEffect(() => {
    getFarm();
  }, [])

  useEffect(() => {
    if (props.route.params && props.route.params.hasOwnProperty('display')) {
      showRegion();
    }
  }, [props.route.params])

  useEffect(() => {
    filterFarm();
  }, [farmList, searchCondition])

  /**
   * 取得所有農場資料
   */
  function getFarm() {
    // const apiFarm = 'https://machi-cat.herokuapp.com/api/farm-stay?max=30';
    const apiFarm = 'https://machi-cat.herokuapp.com/api/farm-stay';

    fetch(apiFarm)
      .then((response) => response.json())
      .then((responseData) => {
        setFarmList(responseData);
        region(responseData);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  /**
   * 篩選農場縣市
   */
  function filterFarm() {
    let list = farmList;
    // 篩選農場縣市
    if (searchCondition && searchCondition !== '全部') {
      list = list.filter((item) => item.CountyName === searchCondition);
    }
    setFilterFarmList(list);
  }

  /**
   * 產生縣市清單
   * @param {Array} data - 所有農場資料
   */
  function region(data) {
    const countyList = [];

    data.forEach((farm) => {
      if (countyList.indexOf(farm.CountyName) === -1) {
        countyList.push(farm.CountyName);
      }
    })

    countyList.unshift('全部');
    setRegionList(countyList);
  }

  /**
   * 是否顯示地區選單
   *
   * @param {boolean} display - 顯示狀態
   */
  function showRegion(display) {
    let displayValue = display || !displayRegion;
    setDisplayRegion(displayValue);
  }

  /**
   * 變更選擇的地區
   *
   * @param {string} region - 選擇的地區
   */
  function changeRegion(region) {
    setSearchCondition(region);
    showRegion(false);
  }

  return (
    <View>
      <View style={ displayRegion ? styles.showRegion : styles.hideRegion }>
        <NavRegion data={regionList} fnChangeRegion={(arg) => changeRegion(arg)} />
      </View>
      <Text style={ farmList.length ? styles.hideLoading : styles.showLoading}>因資料總數達兩千多筆，下載資料可能需要一點時間，請耐心等候</Text>
      <FlatList
        data={filterFarmList}
        renderItem={(list) => HomeFarm({props, item: list.item})}
        keyExtractor={item => item.ID.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  showLoading: {
    display: 'flex',
    textAlign: 'center',
    margin: 50,
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: 3,
  },
  hideLoading: {
    display: 'none',
  },
  showRegion: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99,
  },
  hideRegion: {
    display: 'none',
  },
});
