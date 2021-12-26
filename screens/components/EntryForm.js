import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, SegmentedControlIOSComponent} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useFormik} from 'formik'

const EntryForm = (returnHome) => {

    const [students, setStudents] = useState([{name: ''}])
    const [rooms, setRooms] = useState([{name: '', room_id: ''}])


    const formik = useFormik({
        initialValues: {
            studentId: '',
            roomType: 'Washroom',
            roomId: '',
            comment: ''
        },
        onSubmit: values => {console.log(values)}
    });

    
    function submitForm() {
        returnHome.returnHome()

        fetch('https://serverbubble.herokuapp.com/get/students?name=' + formik.values.studentId.replace(' ', '%20') + "&Cid=91113").then((response) => response.json())
        .then((json) => {
            fetch('https://serverbubble.herokuapp.com/get/rooms?name=' + formik.values.roomId + "&type=" + formik.values.roomType).then((response) => response.json())
                .then((output1) => {
                    const url = 'https://serverbubble.herokuapp.com/entry?Sid=' + json.output[0].student_id + "&Tid=1&Rid=" + output1.output[0].room_id + "&Comment=" + formik.values.comment.replace(' ', '%20')
                    fetch(url).then((response) => response.json())
                    .then((out) => {
                        console.log(out)
                })
            })
        })
    }

    fetch('https://serverbubble.herokuapp.com/get/class?Cid=91113').then((response) => response.json())
        .then((json) => {
            if(students.length != json.output.length) {
                setStudents(json.output)
            } 
    })

    fetch('https://serverbubble.herokuapp.com/get/rooms?type=' + formik.values.roomType).then((response) => response.json())
        .then((json) => {
            if(json.output && JSON.stringify(rooms) != JSON.stringify(json.output)){
                setRooms(json.output)
            }
    })  

    return (
        <View style={{marginBottom: 50}}>
            <View style={styles.container}>
                <View style={styles.tab}>
                    <TouchableOpacity onPress={returnHome.returnHome}>
                        <Image style={styles.logo} source={{uri: "https://img.icons8.com/ios-glyphs/30/000000/back.png"}} />
                    </TouchableOpacity>
                    <View style={{width: 20}}></View>
                    <Text style={styles.heading}>Add Entry</Text>
                </View>
                <View style={styles.tab}>
                    <TouchableOpacity onPress={submitForm}>
                        <Image style={[styles.logo, {marginRight: 20}]} source={{uri: "data:image/png;base64,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"}} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>

                <Picker style={[styles.dropdown, {color: 'orange'}]} enabled={true} mode="dropdown" placeholder="Select Student" selectedValue={formik.values.studentId} onValueChange={formik.handleChange('studentId')}>
                    {students.map((student) => {
                        return (
                            <Picker.Item label={student.name} value={student.name} />
                        )
                    })}
                </Picker>

                <Picker style={[styles.dropdown, {color: '#1FD944'}]} enabled={true} mode="dropdown" placeholder="Select Room Type" selectedValue={formik.values.roomType} onValueChange={formik.handleChange('roomType')}>
                    {["Classroom", "Washroom", "Laboratory", "Feild/Pool", "Recreational Room", "Office/Hall"].map((roomType) => {
                        return (
                            <Picker.Item value={roomType} label={roomType} />
                        )
                    })}
                </Picker>

                <Picker style={[styles.dropdown, {color: '#1C97D8'}]} enabled={true} mode="dropdown" placeholder="Select Room" selectedValue={formik.values.roomId} onValueChange={formik.handleChange('roomId')}>
                    {rooms.map((room) => {
                        return (
                            <Picker.Item value={room.name} label={room.name} />
                        )
                    })}

                </Picker>

                <TextInput style={styles.input} placeholderTextColor="#B988FF" placeholder='Comment...' onChangeText={formik.handleChange('comment')} value={formik.values.comment} />

            </View>

        </View>
    )
}

export default EntryForm

const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        marginHorizontal: -10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        borderColor: '#aaa',
        borderBottomWidth: 0,
        shadowOffset: {},
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 6,
        shadowColor: '#222',
        
    },

    logo: {
        height: 30,
        width: 30,
    },
    tab: {
        marginTop: 25,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    heading:{
        fontWeight: '500', 
        textAlign: 'center', 
        fontSize: 22,
        color: 'black'
    },
    dropdown: {
        marginHorizontal: 10,
        marginVertical: 5,
        height: 30
    },
    
    input: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 15,
        color: '#6938E5',
        marginTop: 5
    }
    
})