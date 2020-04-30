import { Alert, AsyncStorage } from 'react-native';

export const alertMsg = (title, message) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK' },
    ],
    { cancelable: false }
  );

export const setToken = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    // Error saving data
    console.log('error setting token', err);
  }
};

export const getToken = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (err) {
    // Error retrieving data
    console.log('error getting token', err);
  }
};
