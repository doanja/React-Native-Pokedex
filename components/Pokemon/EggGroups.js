import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function EggGroups({ groups }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Egg Groups</Text>
      </CardHeader>
      {groups.map(group => (
        <View key={group.name}>
          <TouchableOpacity>
            <Text style={globalStyles.cardItem}>{group.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Card>
  );
}
