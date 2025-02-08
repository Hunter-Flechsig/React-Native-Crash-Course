// rnfes - react native functional component with styles

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "../global.css";

import { Slot, Stack } from 'expo-router' 
// Slot:renders current child route
// Stack: 
 
const RootLayout = () => {
  return (
    <>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    </>
  )
}

export default RootLayout
