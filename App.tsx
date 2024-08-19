/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import StackNav from './src/navigation/Nav'
const client = new QueryClient()

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <NavigationContainer theme={navTheme}>
          <StackNav />
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  )
}

export default App
