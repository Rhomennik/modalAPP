import React, {useState} from 'react';

import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Button,
} from 'react-native';

const ModalNative = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#dfe4ea',
            }}>
            <View>
              <Text>Hello World!</Text>
              <Button title="Fechar Modal" onPress={handleVisible} />
            </View>
          </View>
        </Modal>

        <Button title="Mostrar modal" onPress={handleVisible} />
      </View>
    </>
  );
};

export default ModalNative;
