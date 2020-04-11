import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import { colors } from '../../constants/theme';

export default function AlternativeForms({ forms }) {
  const navigation = useNavigation();

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Alternative Forms</Text>
      </CardHeader>
      {forms.length ? (
        forms.map(form => (
          <View style={styles.container} key={form.name}>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() =>
                // TODO change to alternative pokemon component
                navigation.navigate('AlternatePokemonForm', {
                  name: form.name,
                  url: form.url,
                })
              }>
              <Image
                style={styles.image}
                source={{
                  uri: form.sprite,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.cardText}>{form.name}</Text>
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

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
  },
  imageContainer: {
    width: '30%',
    alignSelf: 'center',
    padding: 5,
    margin: 4,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 4,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: colors.black,
    margin: 0,
    padding: 5,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
