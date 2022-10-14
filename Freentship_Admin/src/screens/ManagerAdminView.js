import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
// data flatList
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hoà Phát Diên',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ánh Sáng Đêm Sương Mù',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d80',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d81',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d82',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d83',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d84',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d85',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d86',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d861',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d862',
    title: 'Dữ liệu thô',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d87',
    title: 'End',
  },
];

// end flatList

// dữ liệu flatList
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
//   end flatList





// view 1
const FirstRoute = (textInputValue) => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    {/* view input */}
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          placeholderTextColor: 'gray',
          fontWeight: 'bold',
          margin: 10,


        }}
        onChangeText={text => setTextInputValue(text)}
        value={textInputValue}
        placeholder="Nhập mã đơn hàng!"
      />
    </View>
    {/* end view input */}

    <View style={{ flex: 9, backgroundColor: 'white' }}>
      <FlatList
        style={{ padding: 20 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  </View>
);
// end view 1
const renderItem = ({ item }) => (
  <Item title={item.title} />

);
// view 2
const SecondRoute = () => (

  <View style={{ flex: 1, backgroundColor: 'white' }}>

  </View>
);
// end view 2
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
export default function ManagerAdminView() {
  const [textInputValue, setTextInputValue] = React.useState('');
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Danh sách đơn' },
    { key: 'second', title: 'Doanh Thu' },
  ]);

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View>
          <TouchableOpacity style={styles.touchableOpacityChangePassword}>
            <Ionicons style={{ position: 'absolute', margin: 20, left: -200, color: 'white', }} name="notifications-outline" size={35} color="black" />
          </TouchableOpacity>

        

        </View>
        <Image style={styles.Logo} source={require('../../assets/storeLogo.png')}></Image>
      </View>
      <View style={styles.Content}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />

      </View>
      {/* view Navigator */}
      <View style={styles.Navigator}>

      </View>
      {/* end Navigator */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  Tittle: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'white',
    // fontFamily: 'Inter',
    fontWeight: 'bold',

  },
  Logo: {
    justifyContent: 'center',

    position: 'absolute',
   
    alignContent: 'center',
    color: 'white',
  },

  Header: {
    flex: 1.5,
    backgroundColor: '#E94730',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  Content: {
    flex: 8,

  },
  Navigator: {
    flex: 1,
    backgroundColor: 'yellow',

  },
})