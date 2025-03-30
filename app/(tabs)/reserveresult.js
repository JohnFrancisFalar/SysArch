import { Button, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function ReservationTicket() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>1:00 am</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Reservation Ticket</Text>

      {/* Status Icon */}
      <View style={styles.statusIconContainer}>
        <View style={styles.checkCircle}>
          <Text style={styles.checkMark}>✓</Text>
        </View>
      </View>

      {/* Status Message */}
      <Text style={styles.statusMessage}>
        <Text style={styles.successfulText}>Successful!</Text>
        <Text> Your reservation is Confirmed</Text>
      </Text>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Parking at</Text>
          <Text style={styles.detailValue}>SM Seaside Cebu</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValue}>02.10.25</Text>
          <Text style={styles.detailLabel}>Booking ID</Text>
          <Text style={styles.detailValue}>1234567</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Vehicle Details</Text>
          <Text style={styles.detailValue}>ABC 8512</Text>
          <Text style={styles.detailLabel}>Duration</Text>
          <Text style={styles.detailValue}>1 hr</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Parking Spot</Text>
          <Text style={styles.detailValue}>A - A2</Text>
          <Text style={styles.detailLabel}>Payment</Text>
          <Text style={styles.detailValue}>SP Wallet</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Barcode */}
      <View style={styles.barcodeContainer}>
        <View style={styles.barcode} />
      </View>

      {/* Cancel Reservation Button */}
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel Reservation</Text>
      </TouchableOpacity>

      {/* Valid Until */}
      <Text style={styles.validUntil}>Valid until Feb 10,2025, 2:00 am</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  time: {
    fontSize: 16,
    color: '#333',
  },
  statusIcons: {
    flexDirection: 'row',
  },
  signalIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  batteryIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  statusIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  checkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    fontSize: 30,
    color: 'white',
  },
  statusMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  successfulText: {
    color: 'green',
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    color: '#777',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  barcodeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  barcode: {
    width: 200,
    height: 80,
    backgroundColor: 'black',
  },
  cancelButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  cancelText: {
    fontSize: 18,
    color: 'red',
  },
  validUntil: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});