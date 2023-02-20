import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, GestureResponderEvent, ScrollView } from "react-native";
import { Ionicons,Fontisto } from '@expo/vector-icons';
import IconButton from "./IconButton";

const Btn = (props:{isSelected:boolean;
    onPress:any; 
    activeIconName:any; 
    inActiveIconName:any;
    isIonIcon:boolean;
    isFontisto:boolean;}) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={
            {flex:1,
            justifyContent:"center",
            alignItems:"center",
            marginBottom:25,}}>
                        {props.isIonIcon && <Ionicons name={props.isSelected ? props.activeIconName:props.inActiveIconName} color="black" size={24}></Ionicons>}
                        {props.isFontisto && <Fontisto name={props.isSelected ? props.activeIconName:props.inActiveIconName} color="black"size={24}></Fontisto>}

        </TouchableOpacity>
    )
}


const Footer = (props:{selectedBtnIdx:any, setSelectedBtnIdx:any}) => {
    return (
        <View style={styles.footer}>
            <Btn inActiveIconName={"people-outline"} activeIconName={"people-sharp"} onPress={()=>props.setSelectedBtnIdx(0)} isSelected={props.selectedBtnIdx===0} isFontisto={false} isIonIcon={true} ></Btn>
            <Btn inActiveIconName={"chatbubble-outline"} activeIconName={"chatbubble-sharp"} onPress={()=>props.setSelectedBtnIdx(1)} isSelected={props.selectedBtnIdx===1} isFontisto={false} isIonIcon={true}></Btn>
            <Btn inActiveIconName={"hashtag"} activeIconName={"hashtag"} onPress={()=>props.setSelectedBtnIdx(2)} isSelected={props.selectedBtnIdx===2} isFontisto={true} isIonIcon={false}></Btn>
            <Btn inActiveIconName={"md-ellipsis-horizontal-outline"} activeIconName={"md-ellipsis-horizontal-sharp"} onPress={()=>props.setSelectedBtnIdx(3)} isSelected={props.selectedBtnIdx===3} isFontisto={false} isIonIcon={true}></Btn>
        </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : 'white',
        borderTopWidth : 1,
        borderTopColor : 'gray',
        paddingVertical : 10,
        paddingHorizontal : 10,
        }
})

export default Footer;