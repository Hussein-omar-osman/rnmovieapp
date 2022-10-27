import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const TypeSwitcher = ({type, setType}) => {
  console.log(type);
  return (
    <View style={styles.selectWrapper}>
      <View style={styles.select}>
        <TouchableOpacity
          onPress={() => setType(true)}
          style={[
            styles.singleSelected,
            {backgroundColor: type ? 'green' : 'grey'},
          ]}>
          <Text style={styles.textColor}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType(false)}
          style={[
            styles.singleUnSelected,
            {backgroundColor: type ? 'grey' : 'green'},
          ]}>
          <Text style={styles.textColor}>Tv Shows</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TypeSwitcher;

const styles = StyleSheet.create({
  selectWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  select: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 20,
  },
  singleSelected: {
    padding: 11,
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  singleUnSelected: {
    padding: 11,
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  textColor: {
    color: 'white',
  },
});
