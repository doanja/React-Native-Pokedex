import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

import { globalStyles } from '../../styles/global';
import { Card, Button, Text } from '../';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function SearchContainer({ search }) {
  const validationSchema = yup.object({
    pokemon: yup.string().required(),
  });

  return (
    <Card style={styles.card}>
      <Formik
        initialValues={{ pokemon: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          search(values);
          actions.resetForm();
        }}>
        {props => (
          <View>
            {/* pomemon */}
            <View style={styles.form}>
              <TextInput
                style={[globalStyles.input, styles.input]}
                placeholder='Search Pokemon'
                onChangeText={props.handleChange('pokemon')}
                value={props.values.pokemon}
                onBlur={props.handleBlur('pokemon')}
              />

              {/* <Text style={globalStyles.errorText}>
                {props.touched.pokemon && props.errors.pokemon}
              </Text> */}

              <TouchableOpacity style={styles.icons} onPress={props.handleSubmit}>
                <FontAwesome name='search' size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
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
    padding: 12,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
