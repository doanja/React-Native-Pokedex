import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '../constants/theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding
  },
  titleText: {},
  paragraph: {
    marginVertical: 8,
    lineHeight: sizes.base
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  },
  errorText: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center'
  }
});
