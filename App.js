import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from './src/screens/HomeScreen.js'
import FavoritesScreen from './src/screens/FavoritesScreen.js'
import DetailScreen from './src/screens/DetailScreen.js'

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackNavigatorOption = {
  title: "來到農村住一晚",
  headerTitleAlign: 'center',
  headerBackTitle: "返回",
  headerTitleStyle: {
    color: '#0071eb',
    fontSize: 20,
  },
};

let triggerRegion = false;

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOption}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Text
              onPress={() => {
                triggerRegion = !triggerRegion;
                navigation.setParams({display: triggerRegion});
              }}
              style={styles.btnRegion}
            >選擇地區</Text>
          ),
        })}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOption}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = faCircle;
            if (route.name === 'Home') {
              iconName = faHome;
            } else if (route.name === 'Favorites') {
              iconName = faHeart;
            }
            return <FontAwesomeIcon icon={iconName} color={color} size={20} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#0071eb',
          inactiveTintColor: '#888888',
          tabStyle: {
            padding: 10,
            height: 60,
          },
          labelStyle: {
            fontSize: 14,
            margin: 5
          },
        }}
      >
        <BottomTab.Screen name="Home" component={HomeStack} options={{ title: "首頁" }}/>
        <BottomTab.Screen name="Favorites" component={FavoritesStack} options={{ title: "收藏景點" }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRegion: {
    color: "#00bcd4",
    fontSize: 16,
    padding: 10,
  },
});
