import React from 'react'
import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import Entries from './components/Entries'
import Header from './components/Header'
import Students from './components/Students'



const Home = () => {

    return (
        <SafeAreaView style={styles.container}> 
           <Header />
           <Students />
           <Entries />

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        marginLeft: -10,
        marginRight: -10,
        backgroundColor: 'white',
    },
  });

  