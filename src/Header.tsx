import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import IconButton from "./IconButton";
import styled from 'styled-components/native'
const Header = (props: { title: String; }) => { 
   return (
    <HeaderSection>
        <HeaderTitle>{props.title}</HeaderTitle>
   <HeaderFooter>
    <IconButton name="search-outline" color="black" ></IconButton>
    <IconButton name="person-add-outline" color="black"></IconButton>
    <IconButton name="md-musical-notes-outline" color="black"></IconButton>
    <IconButton name="ios-settings-outline" color="black"></IconButton>
   </HeaderFooter>
    </HeaderSection>
   );  
  }

  const HeaderTitle =  styled.Text`
              textAlign : left;
            fontSize : 30;
            fontWeight : bold;
    `;

const HeaderFooter = styled.View`
            flexDirection : row;
            justifyContent : space-between;
            alignItems : center;
    `;

const HeaderSection = styled.View`
            flexDirection : row;
            justifyContent : space-between;
            alignItems : center;
        `;


  export default Header;



