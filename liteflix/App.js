import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './icons/Home';
import Favorite from './icons/Favorite';
import Camera from './icons/Camera';
import User from './icons/User';
import Search from './icons/Search';

const image = {
  uri: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
};

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View style={{backgroundColor: '#242424', height: 300}}>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            height: 100,
            backgroundColor: 'white',
          }}>
          <Text style={styles.title}>Liteflix</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function FavoriteScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function CameraScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function UserScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#A7A7A7',
          tabBarStyle: {
            backgroundColor: '#242424',
            height: 60,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <Home color={color} />,
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <Favorite color={color} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <Search color={color} />,
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <Camera color={color} />,
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => <User color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 700,
    justifyContent: 'flex-end',
  },
});
