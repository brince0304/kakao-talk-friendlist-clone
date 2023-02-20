import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const MyProfile = (props : {
    name:any;
 uri:any; description:any;
    isMe:boolean;
}) => {
    return (
        <View style={styles.profile_section}>
        <Image style={{
            width:props.isMe ? 65:45,
            height:props.isMe ? 65:45,
            borderRadius:props.isMe ? 65/3:45/3,
        }} source={{uri:props.uri}} ></Image>
        <View style={styles.profile_body}>
        <Text style={{
            fontSize : props.isMe? 20:17,
            fontWeight : 'bold',
            marginTop : 5,
            marginLeft : 10,
        }}>{props.name}</Text>
        {props.description &&<Text style={{
            fontSize : props.isMe? 15:12,
            marginLeft : 10,
            color : 'gray',
            marginTop :6,
        }}>{props.description}</Text>}
        </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
        profile_section:{
            flexDirection : 'row',
            justifyContent : 'flex-start',
            alignItems : 'center',
            }
            ,profile_body :{
                flexDirection : 'column',
              }
    });

    export default MyProfile;