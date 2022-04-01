import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export interface InputRoundProps {
    texto?:string;
    password?:boolean;
    onBlur?(campo:any):void;
    icone: string;
    placeholder: string;
    onChangeText?(text:string):void;
}


function InputRoundComponent (props: InputRoundProps) {
    return (
        
            <View>
                {props.texto && <Text style={styles.texto}>{props.texto}</Text>}
                <Input placeholder={props.placeholder}  
                leftIcon={{name:props.icone, color:'blue'}}
                onBlur={props.onBlur}
                placeholderTextColor="blue"
                inputContainerStyle={styles.containerInput}
                inputStyle={{color:'blue'}} 
                onChangeText={props.onChangeText}
                secureTextEntry={props.password}
                />
            </View>
    );
}

export const InputRound = React.memo(InputRoundComponent)

const styles = StyleSheet.create({
    texto: {fontSize: 20, color: 'blue'},
    containerInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 30,
        padding: 5,
        marginBottom: -10
    },
});
