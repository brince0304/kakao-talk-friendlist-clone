import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, GestureResponderEvent, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const IconButton = (props:{
    name:any; color:any;
}) =>{
    return (
        <View style={styles.header_buttons}>
        <Ionicons name={props.name} size={24} color={props.color} />
          </View>
    )
}

const styles = StyleSheet.create({
    header_buttons:{
        paddingHorizontal : 10,
        paddingVertical : 10,
      }
})

export default IconButton;