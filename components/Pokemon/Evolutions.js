import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/global';
import { Card, CardHeader } from '../../components';
import { colors } from '../../constants/theme';

export default function Evolutions({ evolutions }) {
  const navigation = useNavigation();

  // console.log('evolutions :', evolutions);

  return (
    <Card>
      <CardHeader>
        <Text style={globalStyles.headerText}>Evolutions</Text>
      </CardHeader>
      {evolutions
        ? evolutions.map(evolution => (
            <View style={styles.container} key={evolution.name}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() =>
                  navigation.navigate('Pokemon', {
                    name: evolution.name,
                    url: evolution.url
                  })
                }>
                <Image
                  style={styles.image}
                  source={{
                    uri: evolution.sprite
                  }}
                />
              </TouchableOpacity>
              {evolution.method.length === 0
                ? null
                : evolution.method.map(method => {
                    return (
                      <Text style={styles.cardText} key={method.name}>{`${method.name}: ${
                        typeof method.condition === 'object'
                          ? method.condition.name
                          : method.condition
                      }`}</Text>
                    );
                  })}
            </View>
          ))
        : null}
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
