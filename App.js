import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from "firebase";
import {firebaseConfig} from "./Config";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
else{
    firebase.app()
}

