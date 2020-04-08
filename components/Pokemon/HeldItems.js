import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function HeldItems({ items }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Held Items</Text>
      </CardHeader>
      {items.length ? (
        items.map(item => (
          <View key={item.name}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Items', {
                  name: item.name,
                })
              }>
              <Text style={globalStyles.cardItem}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View>
          <Text style={globalStyles.cardText}>None</Text>
        </View>
      )}
    </Card>
  );
}
