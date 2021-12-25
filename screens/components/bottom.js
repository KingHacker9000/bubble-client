import React, { useState } from 'react'
import { View, Text } from 'react-native'

const Bottom = () => {
    const [studentsOutClass, setStudentsOutClass] = useState(0)

    fetch('https://serverbubble.herokuapp.com/room?Rid=91113').then((response) => response.json())
        .then((studentsInClass) => {
            fetch('https://serverbubble.herokuapp.com/get/class?Cid=91113').then((response) => response.json())
                .then((totalStudents) => {
                    const n = totalStudents.output.length - studentsInClass.output.length
                    if(n!= studentsOutClass){
                        setStudentsOutClass(n)
                    }
                })
    })
    
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            flexDirection: 'column',
            height: 900
            }}>
            <View style={{flex: 1}}>

            </View>
            <View style={{flex: 1}} >
                <Text style={{color: '#FCE12F', fontSize: 20}}>Students Outside: {studentsOutClass}/3</Text>
            </View>
        </View>
    )
}

export default Bottom
