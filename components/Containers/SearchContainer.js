import React from 'react';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card } from '../';

import SearchableDropdown from 'react-native-searchable-dropdown';

export default function SearchContainer({ search, pokemon }) {
  return (
    <Card style={styles.card}>
      <SearchableDropdown
        onTextChange={text => console.log(text)}
        onItemSelect={item => search(item.name)}
        containerStyle={[globalStyles.input, styles.input]}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: '#bbb',
          backgroundColor: '#fff',
        }}
        itemStyle={{
          padding: 8,
          marginTop: 2,
          backgroundColor: '#fff',
          borderColor: '#bbb',
          borderWidth: 1,
        }}
        itemTextStyle={{
          color: '#000',
          textTransform: 'capitalize',
        }}
        itemsContainerStyle={{
          maxHeight: '100%',
        }}
        items={pokemon}
        defaultIndex={2}
        //default selected item index
        placeholder='Search Pokemon'
        resetValue={true}
        underlineColorAndroid='transparent'
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    flex: 0,
    backgroundColor: '#f0f0f0',
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    borderRadius: 0,
    flex: 1,
  },
  icons: {
    backgroundColor: 'crimson',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
