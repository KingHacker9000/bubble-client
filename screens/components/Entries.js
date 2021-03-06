import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { ENTRIES } from '../../data/studentData'

function name(n, l){
    if(n.length > l-3){
        return n.slice(0,l-3) + "..."
    }
    return n
}

function getRoom(id){
    fetch("https://serverbubble.herokuapp.com/get/rooms?type=Classroom&Rid=" + id).then((response) => response.json())
        .then((json) => {
            return json.output[0].name
    })
}

function getName(id){
    const url = "https://serverbubble.herokuapp.com/student?Sid=" + id
    fetch(url).then((response) => response.json())
    .then((json) => {
        return json.output[0].name
    })
}

const Entries = () => {

    const [entries, setEntries] = useState(ENTRIES)

    setTimeout(()=>{
        fetch("https://serverbubble.herokuapp.com/get/entries?Tid=1").then((response) => response.json())
        .then((json) => {
            //if (json.output && JSON.stringify(entries) != JSON.stringify(json.output)){
                setEntries(json.output)
            //}
    })
    }, 6000)


    return (
        <View style={{marginTop: 10}}>
            <ScrollView vertical showsVerticalScrollIndicator={true}>
                {entries.map((entry, index) => {
                    return (

                        <View key={index}>
                            <TouchableOpacity>
                                <View style={styles.entryBox}>
                                    <View style={styles.entryContainer}>
                                        <Text style={{marginHorizontal: 10, color: '#6938E5', fontWeight: 'bold'}}>
                                            {entry.exit_time}:
                                        </Text>
                                        <Text style={styles.nameValue}>
                                            {entry.name}
                                        </Text>
                                        <Text style={styles.roomValue}>
                                            {name(entry.room, 18)}
                                        </Text>
                                    </View>
                                    <View style={styles.entryContainer2}>
                                        <Text style={{marginHorizontal: 10, color: '#6938E5', fontWeight: 'bold'}}>
                                            Return Time: {entry.return_time}
                                        </Text>
                                        <Text style={styles.spaceValue}>
                                            
                                        </Text>
                                        <Text style={styles.roomValue}>
                                            Comment: {entry.comment}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Entries

const styles = StyleSheet.create({
    entryContainer: {
        marginHorizontal: 5,
        alignItems: 'stretch',
        padding: 20,
        flexDirection: 'row',
        right: 0,
        left: 0,
    },
    entryContainer2: {
        marginHorizontal: 5,
        alignItems: 'stretch',
        padding: 20,
        flexDirection: 'row',
        right: 0,
        left: 0,
        justifyContent: 'center', 
        alignItems: 'center',
    },

    entryBox: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },

    nameValue: {
        textAlign: 'center',
        marginHorizontal: 10,
        width: 130,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'orange',
        color: 'red'
    },
    spaceValue: {
        textAlign: 'center',
        marginHorizontal: 10,
        width: 5,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'orange',
        color: 'red'
    },

    roomValue: {
        marginHorizontal: 10,
        width: 150,
        color: '#1FD944'
    }
})