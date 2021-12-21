import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { COLORS, STUDENTS } from '../../data/studentData'

const Students = () => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            
                {STUDENTS.map((student, index) =>{ 
                    return (
                        <View key={index} >
                            <TouchableOpacity>
                                <View style={StyleSheet.flatten([styles.student, {backgroundColor: COLORS[index%6], borderColor: COLORS[index%6]}])}>
                                    <Text style={{color: 'white', fontWeight: "700"}}>{student.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>     
                    )
                })}

            </ScrollView>
            
        </View>
    )
}

export default Students

const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    student: {
        marginHorizontal: 5,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 30,
        padding: 7,
        backgroundColor: 'red',
    }
})