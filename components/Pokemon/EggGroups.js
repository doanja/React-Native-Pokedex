import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function EggGroups({ groups }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Egg Groups</Text>
      </CardHeader>
      {groups.map(group => (
        <View key={group.name}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EggGroups', {
                name: group.name,
                url: `/group/${group.name}`,
              })
            }>
            <Text style={globalStyles.cardItem}>{group.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Card>
  );
}
