import react, {useState}  from 'react';
import { Modal, View, SafeAreaView, StyleSheet} from 'react-native';
import AddEntry from './screens/AddEntry';
import Home from './screens/home';

export default function App() {
  console.disableYellowBox = true;
    
  const [entryModalVisible, setEntryModalVisible] = useState(false);
  returnHome = () => {setEntryModalVisible(false)}
  openEntry = () => {setEntryModalVisible(true)}


  return (  

    <View>
      <Home entryState={openEntry}/>
      <Modal presentationStyle="pageSheet" statusBarTranslucent={true} visible={entryModalVisible} animationType='slide' style={styles.modal}>
        <AddEntry returnHome={returnHome}/>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  modal: {
    marginTop: -10
  }
})