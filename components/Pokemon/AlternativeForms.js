import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import { colors } from '../../constants/theme';

export default function AlternativeForms({ forms }) {
  console.log('forms :', forms);
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Alternative Forms</Text>
      </CardHeader>
      {forms ? (
        forms.map(form => (
          <View style={styles.container} key={form.name}>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() =>
                navigation.navigate('Pokemon', {
                  name: form.name,
                  url: form.url
                })
              }>
              <Image
                style={styles.image}
                source={{
                  uri: form.sprite
                }}
              />
              <Text style={globalStyles.cardText}>{form.name}</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text styles={globalStyles.cardText}>None</Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5
  },
  imageContainer: {
    width: '50%',
    alignSelf: 'center',
    padding: 5,
    margin: 4
  },
  image: {
    width: '75%',
    height: Dimensions.get('window').width / 4,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  cardText: {
    color: colors.black,
    margin: 0,
    padding: 5,
    textAlign: 'center',
    textTransform: 'capitalize'
  }
});
