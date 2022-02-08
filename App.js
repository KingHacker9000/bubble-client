import react, {useState}  from 'react';
import { Modal, View, SafeAreaView, StyleSheet} from 'react-native';
import AddEntry from './screens/AddEntry';
import Home from './screens/home';
import ReturnEntry from './screens/returnEntry';

export default function App() {
  console.disableYellowBox = true;

  const [returnModalVisible, setReturnModalVisible] = useState(false);
  openReturnModal = () => {setReturnModalVisible(true)};

  const [entryModalVisible, setEntryModalVisible] = useState(false);
  openEntry = () => {setEntryModalVisible(true)};

  returnHome = () => {setEntryModalVisible(false); setReturnModalVisible(false)};


  return (  

    <View>
      <Home entryState={openEntry} returnModalState={openReturnModal} />
      <Modal presentationStyle="pageSheet" statusBarTranslucent={true} visible={entryModalVisible} animationType='slide' style={styles.modal}>
        <AddEntry returnHome={returnHome}/>
      </Modal>
      <Modal presentationStyle="pageSheet" statusBarTranslucent={true} visible={returnModalVisible} animationType='slide' style={styles.modal}>
        <ReturnEntry returnHome={returnHome}/>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  modal: {
    marginTop: -10
  }
})