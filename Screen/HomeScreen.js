import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('GameScreen')}>
                    <Text style={styles.buttonText}>Play Game</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('OptionsScreen')}>
                    <Text style={styles.buttonText}>Options</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('HistoryScreen')}>
                    <Text style={styles.buttonText}>History</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 200,
        backgroundColor: '#914545', 
        height: 50,
        marginVertical: 10
    },
    buttonText:{
        color: '#FFFFFF',
        fontWeight: 'bold'
    }

})

export default HomeScreen
