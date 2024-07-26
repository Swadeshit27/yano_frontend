import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PatientDetails from '../components/PatientDetails';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function MonitoringFilled({navigation}) {
  // const [activeSection, setActiveSection] = useState('Monitoring'); // Default to 'Monitoring'

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Monitoring</Text>
        <Ionicons name="notifications" size={25} color={'#00263E'} />
      </View>

      <View style={styles.secondContainer}>
        <ScrollView style={styles.patientDiv}>
          <PatientDetails
            name="María Clemente"
            icon="circle-user"
            color={'#00263E'}
          />
          <View style={styles.line} />
          <PatientDetails
            name="Juan Torres"
            icon="circle-user"
            color={'#00263E'}
          />
          <View style={styles.line} />
          <PatientDetails
            name="Jorge Pardo"
            icon="circle-user"
            color={'#00263E'}
          />
          <View style={styles.line} />
          <PatientDetails
            name="Jorge Pardo"
            icon="circle-user"
            color={'#00263E'}
          />
          <View style={styles.line} />
          <PatientDetails
            name="Jorge Pardo"
            icon="circle-user"
            color={'#00263E'}
          />
        </ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddPatients')}>
            <FontAwesome name="plus" size={15} color="white" />
            <Text style={styles.addButtonText}>Add Patient</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 25,
  },
  title: {
    color: '#00263E',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  secondContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    width: '100%',
  },
  patientDiv: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    height: '85%',
  },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
    marginHorizontal: '10%',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00263E',
    padding: 18,
    borderRadius: 8,
    width: 120,
  },
  addButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerSection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
