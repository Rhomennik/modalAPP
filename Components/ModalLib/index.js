import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const ModalLib = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Button title="Hide modal" onPress={toggleModal} />
          <View style={{backgroundColor: '#dcdde1'}}>
            <Text>salve quebrada suave?</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalLib;
