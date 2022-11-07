import{View, Text, TextInput, Button, StyleSheet, FlatList} from "react-native";
import{myTodos } from "../data-source/mytodos";

export function TodoApp(){
    function TodoTenmplate (title, todotype, frequency){
        let boColor;
        let baColor;}

        if(todoType="Reminder"){
            boColor = "orange";
            baColor = "oldlace";
        }else if(todoType== "Goal"){
            boColor = "aqua";
            baColor = "skyblue";
        }
        else if(todoType=="Event"){
            boColor = "red";
            baColor = "magenta";
        }

        return(
            <View style={[styles,todo, 
                {borderColor: boColor, backgroundColor:baColor}]}>
                <Text styles={styles.todoTitle}>{title}</Text>
                <View style={styles.options}>
                        

        )
    
}