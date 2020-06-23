import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather } from '@expo/vector-icons';

import DetailScreen from '../screens/DetailScreen';
import ListScreen from '../screens/ListScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
});

const ListNavigator = createStackNavigator({
  List: ListScreen,
  Detail: DetailScreen
});

const MapNavigator = createStackNavigator({
  Map: MapScreen,
  Detail: DetailScreen
});

const FavoritesNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  Detail: DetailScreen
});

const PlacesTabNavigator = createBottomTabNavigator({
  PlacesHome: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => <Feather name="home" size={24} color="white" />
    }
  },
  PlacesMap: {
    screen: MapNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => <Feather name="map-pin" size={24} color="white" />
    }
  },
  PlacesList: {
    screen: ListNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => <Feather name="search" size={24} color="white" />
    }
  },
  PlacesFavorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => <Feather name="star" size={24} color="white" />
    }
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: 'blue'
    },
    activeTintColor: '#1B26A4',
    showLabel: false
  }
})

export default createAppContainer(PlacesTabNavigator);
