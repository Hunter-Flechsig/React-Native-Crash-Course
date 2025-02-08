import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

//use separate layout to not have navigation below

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name = "sing-in"
          options = {{headerShown: false}}
        />

        <Stack.Screen
          name = "sing-out"
          options = {{headerShown: false}}
        />
      </Stack>

      <StatusBar backgroundColor='#161622'
        style='light' />
    </>
  )
}

export default AuthLayout