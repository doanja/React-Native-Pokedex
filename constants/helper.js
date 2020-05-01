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
    console.log('Error setting token', err);
  }
};

export const clearStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (err) {
    console.error('Error clearing app data', err);
  }
};
