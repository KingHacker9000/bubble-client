import React from 'react'
import { View, StyleSheet} from 'react-native'
import Entries from './components/Entries'
import Header from './components/Header'
import Students from './components/Students'



const Home = (entryState) => {

    return (
        <View style={styles.container}> 
           <Header entryState={entryState}/>
           <Students />
           <Entries />
           

        </View>
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

  