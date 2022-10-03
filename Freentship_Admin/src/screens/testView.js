import * as React from 'react';
import { View, useWindowDimensions, Text, TouchableOpacity, Modal } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import ModalSimple from '../components/ModalCalendar'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = (isModalVisible, changeModelVisible, setData, ChooseData) => (

  <View style={{ flex: 1, backgroundColor: 'white' }} >
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text >Xem Danh Thu :</Text>
  
    </View>
    <View style={{ flex: 9, backgroundColor: 'blue' }}>
      <Text >Xem Danh Thu :</Text>
      <TouchableOpacity onPress={() => changeModelVisible(true)}>
        <View style={{ flexDirection: 'row', }} >
          <Ionicons name="calendar-outline" size={30} color="black" />
          <Text >{ChooseData}</Text>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModelVisible(false)}
          >
            <ModalSimple
              changeModalVisible={changeModelVisible}
              setData={setData}
            ></ModalSimple>
          </Modal>
        </View>
      </TouchableOpacity>
    </View>
  </View>

);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
 
  return (

    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}