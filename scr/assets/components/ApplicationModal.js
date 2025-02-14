import {View, Modal, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { Responsive } from '../theme/Layout';
import { COLORS } from '../theme/Theme';


const ApplicationModal = ({
  message,
  backgroundColor = COLORS.green,
  onClose = () => {},
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.modalContainer}>
        <View style={[styles.modalContent, {backgroundColor: backgroundColor}]}>
          <Text style={[styles.textstyle]}>{message}</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ApplicationModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    paddingBottom: Responsive.height(107),
  },
  modalContent: {
    borderRadius: 38,
    alignSelf: 'center',
    paddingVertical: Responsive.height(9),
    paddingHorizontal: Responsive.width(19),
  },
  textstyle: {
    color: COLORS.white,
    fontSize: 16,
  },
});
