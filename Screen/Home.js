import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {AuthContext} from './AuthContext'

const {start_game} = React.useContext(AuthContext);

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
           <TouchableOpacity onPress={start_game} style={styles.button}>
               <Text style={{color: 'white'}}>Demarrer</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFB4B4'
    }

})

export default Home;
