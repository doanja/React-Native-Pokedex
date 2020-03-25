import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';

export default function Height({ items }) {
  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Held Items</Text>
      </CardHeader>
      {items.length > 0 ? (
        items.map(item => (
          <View key={item.name}>
            <TouchableOpacity>
              <Text style={globalStyles.cardItem}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View>
          <TouchableOpacity>
            <Text style={globalStyles.cardItem}>None</Text>
          </TouchableOpacity>
        </View>
      )}
    </Card>
  );
}
