import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, GestureResponderEvent } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import FriendList from "./FriendList";
import { friendList } from "./data";
import Margin from "./Margin";

interface Props {
    isOpened: boolean;
    onPress:any;
    friendListLen: number;
    children?: React.ReactNode;
  }
const FriendSection = (props : Props) => {
    return (
      <View >
        <View style={styles.friend_section}>
        <Text style={styles.friend_section_header}>친구 {props.friendListLen}</Text>
        <TouchableOpacity onPress={props.onPress}>
        <MaterialIcons name={props.isOpened? "keyboard-arrow-up":"keyboard-arrow-down"} size={24} color="black" style={styles.keyboard_arrow_up}  />
        </TouchableOpacity>
        </View>
    </View>
    )
  }


    const styles = StyleSheet.create({
        friend_section : {
            flexDirection : 'row',
            justifyContent : 'space-between',
          }
          ,friend_section_header : {
            fontSize : 15,
            fontWeight : 'bold',
            color : 'gray',
        
        
          },
            friend_section_footer : {
            fontSize : 15,
            fontWeight : 'bold',
            color : 'gray',
          
            }
            ,keyboard_arrow_up : {
                opacity : 0.5,
          
        }});

    export default FriendSection;
          
  
