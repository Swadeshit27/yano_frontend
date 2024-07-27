/* eslint-disable react/no-unstable-nested-components */
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../components/header/Header';
import {Colors} from '../../../constants/Colors';
import {patientList} from '../../../test/Data';
import PatientListItem from './components/PatientListItem';
import Card from '../../../components/cards/Card';
import FilledButton from '../../../components/buttons/FilledButton';
import Icons from '../../../assets/icon/Icon';
import {navigate} from '../../../navigation/RootNavigation';
import {StaticImage} from '../../../assets/images';

const PatientMonitoringList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Monitoring" showBackIcon={false} />
      <View style={styles.contentContainer}>
        {patientList?.length > 0 ? (
          <Card>
            <FlatList
              data={patientList}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index: _index}) => (
                <PatientListItem name={item.name} />
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </Card>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={StaticImage.ListEmpty}
              style={{
                height: 100,
                width: 100,
              }}
            />
            <Text
              style={{
                color: Colors.Black,
                fontSize: 18,
                fontWeight: '600',
                marginTop: 8,
              }}>
              No monitored patients
            </Text>
            <Text style={{textAlign: 'center'}}>
              Add a patient and start monitoring their {'\n'}health.
            </Text>
          </View>
        )}
        <FilledButton
          type="blue"
          label="Add patient"
          activeOpacity={1}
          onPress={() => navigate('AddPatient')}
          icon={
            <Icons.MaterialIcons name="add" color={Colors.White} size={25} />
          }
          style={styles.floatingBtn}
        />
      </View>
    </SafeAreaView>
  );
};

export default PatientMonitoringList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.GhostWhite,
    width: '100%',
    position: 'relative',
  },
  separator: {
    backgroundColor: Colors.LightGray,
    height: 1,
    width: '100%',
  },
  floatingBtn: {
    position: 'absolute',
    bottom: '4%',
    right: '4%',
    width: '40%',
  },
});
