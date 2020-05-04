import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Card, Text } from '../';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function SearchContainer({ search }) {
  const validationSchema = yup.object({
    search: yup.string().required(),
  });

  return (
    <Card style={styles.card}>
      <Formik
        initialValues={{ search: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          search(values);
          actions.resetForm();
        }}>
        {props => (
          <View>
            <View style={styles.form}>
              <TextInput
                style={[globalStyles.input, styles.input]}
                placeholder='Search pokemon'
                onChangeText={props.handleChange('search')}
                value={props.values.search}
                onBlur={props.handleBlur('search')}
              />

              <TouchableOpacity style={styles.icons} onPress={props.handleSubmit}>
                <FontAwesome name='search' size={20} />
              </TouchableOpacity>
            </View>
            <Text style={globalStyles.errorText}>
              {props.touched.search && props.errors.search}
            </Text>
          </View>
        )}
      </Formik>
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
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
