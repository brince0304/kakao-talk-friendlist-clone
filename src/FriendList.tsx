import React from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import { friendList } from "./data";
import Profile from "./Profile";
import Margin from "./Margin";
import { getBottomSpace } from "react-native-iphone-screen-helper";
const bottomSpace = getBottomSpace();
interface Props {
    data: { name: any; uri: any; description: any; }[];
    isOpened: boolean;
    }

const FriendList = (props:Props) => {
    if(props.isOpened){
        return (  <View>
            <ScrollView showsVerticalScrollIndicator={false} >
        {props.data.map((friend: { name: any; uri: any; description: any; }, index) => (
            <><Profile
            key={index}
                name={friend.name}
                uri={friend.uri}
                description={friend.description}
              isMe={false}
            ></Profile><Margin height={13} /></>
        ))}
        </ScrollView>
        </View>);
    }else{
        return null;
    }
    };

export default FriendList;

