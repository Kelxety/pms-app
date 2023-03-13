import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuthStore } from '../../useStore/useRoleStore'
import { Props } from '../../navigator/RootNavigator'

const Dashboard = ({navigation}:Props) => {
  const { logout } = useAuthStore();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={logout}>
        <Text>Lgout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Dashboard