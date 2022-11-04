import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Layout/components/Header/'

const Home = () => {

 const timestamp = {
    nanoseconds: 0,
    seconds: 1562524200
  }
  
 const a = new Date(timestamp.seconds*1000)

  return (
    <View>
      <Header/>
      <Text>{a.toLocaleString()}</Text>
    </View>
  )
}

export default Home