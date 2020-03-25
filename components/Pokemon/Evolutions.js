import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Evolutions({ evolutions }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Evolutions</Text>
      </CardHeader>
      {/* {evolutions.length > 0 ? (
        evolutions.map(evolution => (
          <View key={evolution.name}>
            <TouchableOpacity>
              <Text style={globalStyles.cardItem}>{evolution.name}</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View>
          <Text style={globalStyles.cardText}>None</Text>
        </View>
      )} */}
    </Card>
  );
}
