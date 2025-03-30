import { Button, Text, View, StyleSheet, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';

export default function Booking() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [editingField, setEditingField] = useState('');
  const [inputValue, setInputValue] = useState('');
  
  const [details, setDetails] = useState({
    arrivalTime: '10th Feb • 1:00 AM',
    duration: '1 Hour',
    vehicle: 'Honda Civic\nABC 8912',
    mall: 'SM Seaside Cebu',
    parkingSlot: 'A - A2',
  });
  
  const paymentMethods = [
    { id: 'wallet', label: 'Sweet Spot Wallet', subtext: 'Available balance: ₱150' },
    { id: 'gcash', label: 'Gcash', subtext: 'Gcash Account Required' },
    { id: 'card', label: 'Debit / Credit Card', subtext: 'UnionPay, Mastercard, Visa' },
    { id: 'cash', label: 'Cash', subtext: 'Counter Payment' },
    { id: 'other', label: 'Other Wallet', subtext: 'PayPal, Maya' },
  ];
  const [selectedPayment, setSelectedPayment] = useState('wallet');

  const openEditModal = (field) => {
    setEditingField(field);
    setInputValue(details[field]);
    setModalVisible(true);
  };

  const saveChanges = () => {
    setDetails({ ...details, [editingField]: inputValue });
    setModalVisible(false);
  };

  return (
   
    <View style={styles.container}>
       
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{'←'}</Text>
        
      </TouchableOpacity>
      
      <Text style={styles.title}>Booking Details</Text>

      {Object.keys(details).map((key, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').trim()}</Text>
          <Text style={styles.value}>{details[key]}</Text>
          <TouchableOpacity onPress={() => openEditModal(key)}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      ))}
<ScrollView>
      <Text style={styles.paymentTitle}>Payment</Text>

      {paymentMethods.map((method) => (
        <TouchableOpacity key={method.id} style={styles.paymentOption} onPress={() => setSelectedPayment(method.id)}>
          <View style={styles.radioCircle}>{selectedPayment === method.id && <View style={styles.selectedRadio} />}</View>
          <View>

            <Text style={styles.paymentLabel}>{method.label}</Text>
            <Text style={styles.paymentSubtext}>{method.subtext}</Text>
            
          </View>
          
        </TouchableOpacity>
      ))}

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit {editingField.replace(/([A-Z])/g, ' $1').trim()}</Text>
            <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} />
            <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <View style={styles.bottomBar}>
        <Text style={styles.slotInfo}>6/12 Slot <Text style={styles.slotAvailable}>Available</Text></Text>
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveText}>Reserve Spot ₱100.00</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  backButton: { marginBottom: 10 },
  backText: { fontSize: 24 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  label: { fontSize: 16, color: '#777', flex: 1 },
  value: { fontSize: 16, fontWeight: '500', flex: 2, textAlign: 'center' },
  editText: { fontSize: 16, color: '#007BFF' },
  paymentTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  paymentOption: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  radioCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#007BFF', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  selectedRadio: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#007BFF' },
  paymentLabel: { fontSize: 16, fontWeight: '500' },
  paymentSubtext: { fontSize: 14, color: '#777' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 20, marginBottom: 10 },
  input: { width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10, backgroundColor: 'white' },
  saveButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5, width: '100%', alignItems: 'center' },
  saveButtonText: { color: 'white', fontSize: 18 },
  bottomBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#f8f8f8', marginTop: 20, borderRadius: 5 },
  slotInfo: { fontSize: 16 },
  slotAvailable: { color: 'green', fontWeight: 'bold' },
  reserveButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 5, alignItems: 'center' },
  reserveText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
