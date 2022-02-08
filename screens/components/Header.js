import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal} from 'react-native'
import AddEntry from '../AddEntry';

const Header = (entryState, returnModalState) => {

    return (
        <View style={styles.container}>
            
            <View>
                <TouchableOpacity>
                    <Image style={styles.logo} source={require('../../assets/bubble.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={entryState.entryState.entryState}>
                    <Image style={styles.button} source={{uri: "https://img.icons8.com/ios/50/000000/add.png"}} />    
                </TouchableOpacity>
                <TouchableOpacity onPress={entryState.entryState.returnModalState}>
                    <Image style={styles.button} source={{uri: "https://img.icons8.com/ios/100/000000/reply-arrow--v1.png"}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.button} source={{uri: "https://img.icons8.com/material-outlined/24/000000/menu--v4.png"}} />
                </TouchableOpacity>
                
            </View>
            
        </View>
        
    )
}

export default Header

const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 4
    },

    logo: {
        height: 100,
        width: 120,
        resizeMode: 'contain'
    },

    button: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginHorizontal: 10
    },

    iconContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 5
    }
})