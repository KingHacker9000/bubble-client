import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { ENTRIES } from '../../data/studentData'

const Entries = () => {
    return (
        <View style={{marginTop: 10}}>
            <ScrollView vertical showsVerticalScrollIndicator={true}>
                {ENTRIES.map((entry, index) => {
                    return (

                        <View key={index}>
                            <TouchableOpacity>
                                <View style={styles.entryContainer}>
                                    <Text style={{marginHorizontal: 10, color: '#aaa'}}>
                                        {entry.exitTime}:
                                    </Text>
                                    <Text style={styles.entryValue}>
                                        {entry.studentName}
                                    </Text>
                                    <Text style={styles.entryValue}>
                                        {entry.room}
                                    </Text>
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
        marginHorizontal: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        padding: 20,
        flexDirection: 'row',
    },
    entryValue: {
        marginHorizontal: 10
    }
})