import { TextInput, View,Text, TouchableOpacity } from "react-native";
import firebase from "firebase";
import db from "../config";
import * as React from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login:"",
            password:"",
            msg:""
        }
    }
    render(){
        return(
            <View>
                <Text>{"login: { "}</Text>
                <TextInput onChangeText={(text)=>{
                    this.setState({
                        "login":text
                    })
                }} placeholder="login"></TextInput>
                <TextInput onChangeText={(text)=>{
                    this.setState({
                        "password":text
                    })
                }} placeholder="password"></TextInput>
                <TouchableOpacity onPress={()=>{
                    let bad = false
                    firebase.auth().createUserWithEmailAndPassword(this.state.login, this.state.password).then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        // ...
                      }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        this.setState({
                            msg:"codigo de erro: "+errorCode + "\nmensagem de erro: " + errorMessage
                        })
                        bad=true
                      });
                    if(!bad) {
                        this.setState({
                            msg:"deu certo, prossiga com as operações neste app"
                        })
                    }
                }}>
                    <Text>submit</Text>
                </TouchableOpacity>
                <Text>{" } "}</Text>
                <Text>{this.state.msg}</Text>
            </View>
        )
    }
}