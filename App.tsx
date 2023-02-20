import { StatusBar } from 'expo-status-bar';
import React, { useState,useContext } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView,Button,Switch, ActivityIndicator, FlatList } from 'react-native';
import Header from './src/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/Profile';
import { myProfile,friendList } from './src/data';
import Margin from './src/Margin';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import Footer from './src/Footer';
import styled from 'styled-components/native'

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }

  const ItemSeparatorComponent = () => {
    return <Margin height={12} />
  }
  const renderItem = ({item}:{item:{name:string,uri:string,description:string}}) => {
    return <Profile
    name={item.name}
    uri={item.uri}
    description={item.description}
    isMe={false}
    ></Profile>
  }


  const ListFooterComponent = () =>{
      return       <Margin height={10}/>

  }
  const ListHeaderComponent = () => {
    return (
      <View style={{backgroundColor:"white"}}> 
      <Header title="친구"></Header>
      <Margin height={10}/>
      <Profile 
      name={myProfile.name} 
      uri={myProfile.uri} 
      description={myProfile.description}
      isMe={true}></Profile>
      <Margin height={15}/>
      <Division />
      <Margin height={15}/>
      <FriendSection isOpened={isOpened} onPress={onPressArrow} friendListLen={friendList.length} >
      </FriendSection>
      <Margin height={5}/></View>
    )
  }
  const [selectedBtnIdx, setSelectedBtnIdx] = useState(0);
  return (
    <Container>
      <FlatList data={isOpened? friendList:null} ItemSeparatorComponent={ItemSeparatorComponent} keyExtractor={(item,index) => index.toString()}
      renderItem = {renderItem} ListHeaderComponent={ListHeaderComponent} ListFooterComponent={ListFooterComponent}
      stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} ></FlatList>
      <Footer selectedBtnIdx={selectedBtnIdx} setSelectedBtnIdx={setSelectedBtnIdx}></Footer>
      </Container>
  );
}







const Division = () => {
  return <Text style={styles.division} ></Text>;
}

const Container = styled.View`
      paddingHorizontal: 15;
      paddingVertical: 10;
      paddingTop: 50;
      flex:1;
      backgroundColor: #fff
`


const styles = StyleSheet.create({
  text : {
    fontSize : 20,
    fontWeight : 'bold',
  },
  //구분선
  division : {
    height : 0.5,
    backgroundColor : 'lightgrey',
    width: '100%',

  }
  //친구 섹션 부분

  


  //친구목록




  
  
});

