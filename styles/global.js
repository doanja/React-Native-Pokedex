import { StyleSheet } from 'react-native';
import { colors, sizes } from '../constants/theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding,
  },
  titleText: {
    textTransform: 'capitalize',
    fontSize: 14,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: sizes.base,
    color: 'black',
  },
  input: {
    borderWidth: 0.5,
    borderColor: colors.primary,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
  errorText: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  headerText: {
    color: colors.white,
    textTransform: 'capitalize',
  },
  cardItem: {
    color: colors.black,
    borderColor: colors.black,
    borderWidth: 0.5,
    borderRadius: sizes.radius,
    margin: 3,
    padding: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  cardText: {
    color: colors.black,
    margin: 3,
    padding: 10,
    textAlign: 'center',
  },
});
