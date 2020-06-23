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
import Colors from '../constants/Colors';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
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

const tabBarIcon = (name) => ({ tintColor, focused }) => (
  <Feather name={name} size={24} color={focused ? tintColor : 'white'} />
)

const PlacesTabNavigator = createBottomTabNavigator({
  PlacesHome: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: tabBarIcon('home')
    }
  },
  PlacesMap: {
    screen: MapNavigator,
    navigationOptions: {
      tabBarIcon: tabBarIcon('map-pin')
    }
  },
  PlacesList: {
    screen: ListNavigator,
    navigationOptions: {
      tabBarIcon: tabBarIcon('search')
    }
  },
  PlacesFavorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabBarIcon('star')
    }
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: Colors.primaryColor,
      borderTopColor: 'transparent',
      borderTopWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
    },
    tabInfo: {
      tintColor: 'white'
    },
    tintColor: 'white',

    tabBarColor: 'white',
    activeTintColor: Colors.accentColor,
    showLabel: false,
  }
})

export default createAppContainer(PlacesTabNavigator);
