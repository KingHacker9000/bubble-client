import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Image style={styles.logo} source={require('../../assets/bubble.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image style={styles.button} source={{uri: "https://img.icons8.com/ios/50/000000/add.png"}} />    
                </TouchableOpacity>
                <TouchableOpacity>
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