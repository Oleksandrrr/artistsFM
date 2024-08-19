import React from 'react'
import { NavigationProp } from '@react-navigation/native'

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ArtistsAlbumTracks from '../screens/ArtistsAlbumTracks'
import TracksScreen from '../screens/TracksScreen'
import FakeLoginScreen from '../screens/Auth/FakeLoginScreen'

type RootStackParamList = {
  Home: undefined
  ArtistsAlbumTracks: { artistId: string }
  TracksScreen: { artistName: string; albumName: string }
  Login: undefined
}
export type StackNavigation = NavigationProp<RootStackParamList>
export type ArtistsAlbumTracksPageProps = NativeStackScreenProps<
  RootStackParamList,
  'ArtistsAlbumTracks'
>

export type TracksScreenPageProps = NativeStackScreenProps<
  RootStackParamList,
  'TracksScreen'
>
const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={FakeLoginScreen} />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArtistsAlbumTracks"
        component={ArtistsAlbumTracks}
        options={{ headerTitle: '', headerBackVisible: true }}
      />

      <Stack.Screen
        name="TracksScreen"
        component={TracksScreen}
        options={{ headerTitle: '', headerBackVisible: true }}
      />
    </Stack.Navigator>
  )
}
export default StackNav
