import React from 'react'
import { View, Text } from 'react-native'
import Bottom from './components/bottom'
import EntryForm from './components/EntryForm'

const AddEntry = (returnHome) => {
    
    return (
        <View>
            <EntryForm returnHome={returnHome.returnHome} />
            <Bottom />
        </View>
    )
}

export default AddEntry
